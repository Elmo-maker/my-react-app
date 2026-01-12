const midtransClient = require('midtrans-client');
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

// Konfigurasi Snap Midtrans
const snap = new midtransClient.Snap({
    isProduction: false, // set true untuk production
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY
});

// Controller untuk membuat transaksi
const createTransaction = async (req, res) => {
    try {
        const { orderId, grossAmount, customerDetails, itemDetails } = req.body;

        console.log('Creating transaction:', { orderId, grossAmount, customerDetails, itemDetails });

        // Decode JWT untuk mendapatkan loginId (jika ada)
        let loginId = 1; // default untuk guest
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            try {
                const token = authHeader.split(' ')[1];
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                loginId = decoded.id || 1;
                console.log('Login ID from token:', loginId);
            } catch (err) {
                console.log('Invalid token, using guest loginId');
            }
        }

        // Parameter transaksi sesuai Midtrans docs
        const parameter = {
            transaction_details: {
                order_id: orderId,
                gross_amount: grossAmount
            },
            customer_details: customerDetails,
            item_details: itemDetails,
            callbacks: {
                finish: `${process.env.FRONTEND_URL}/payment/success`,
                error: `${process.env.FRONTEND_URL}/payment/error`,
                pending: `${process.env.FRONTEND_URL}/payment/pending`
            }
        };

        // Buat transaksi ke Midtrans
        const transaction = await snap.createTransaction(parameter);

        console.log('Transaction created successfully:', transaction.token);

        // SIMPAN KE DATABASE PRISMA
        const eventId = itemDetails?.[0]?.id;
        const jumlahTiket = itemDetails?.[0]?.quantity || 1;

        console.log('Saving to DB:', { eventId, jumlahTiket, orderId, grossAmount, loginId });

        // Selalu simpan transaksi
        const savedTransaction = await prisma.transaksi.create({
            data: {
                orderId: orderId,
                id_event: Number(eventId) || 1,
                jumlah_tiket: Number(jumlahTiket),
                total_harga: Number(grossAmount),
                nama_pembeli: customerDetails?.first_name || "Unknown",
                email: customerDetails?.email || "",
                telepon: customerDetails?.phone || "",
                status: "pending",
                loginId: loginId,
            }
        });
        console.log('Transaction saved to database:', savedTransaction.id_transaksi);

        res.status(200).json({
            success: true,
            token: transaction.token,
            redirect_url: transaction.redirect_url
        });

    } catch (error) {
        console.error('Midtrans Error:', error);
        res.status(500).json({
            success: false,
            message: 'Gagal membuat transaksi',
            error: error.message
        });
    }
};

// Webhook untuk notifikasi dari Midtrans
const handleNotification = async (req, res) => {
    try {
        const notification = await snap.transaction.notification(req.body);

        const orderId = notification.order_id;
        const transactionStatus = notification.transaction_status;
        const fraudStatus = notification.fraud_status;

        console.log(`Transaction notification received. Order ID: ${orderId}. Transaction status: ${transactionStatus}. Fraud status: ${fraudStatus}`);

        // Update status di database
        let status = "pending";
        if (transactionStatus === 'capture' || transactionStatus === 'settlement') {
            status = fraudStatus === 'accept' || !fraudStatus ? 'paid' : 'pending';
        } else if (transactionStatus === 'cancel' || transactionStatus === 'deny' || transactionStatus === 'expire') {
            status = 'failed';
        }

        // Update database
        await prisma.transaksi.updateMany({
            where: { orderId: orderId },
            data: { status: status }
        });

        console.log(`Order ${orderId} status updated to: ${status}`);

        res.status(200).json({ message: 'Notification received' });

    } catch (error) {
        console.error('Notification Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error handling notification',
            error: error.message
        });
    }
};

module.exports = {
    createTransaction,
    handleNotification
};
