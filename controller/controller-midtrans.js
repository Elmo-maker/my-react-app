const midtransClient = require('midtrans-client');

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

        console.log('Creating transaction:', { orderId, grossAmount, customerDetails });

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

        // Handle berbagai status pembayaran
        if (transactionStatus === 'success') {
            if (fraudStatus === 'accept') {
                console.log('Payment success');
            }
        } else if (transactionStatus === 'settlement') {
            console.log('Payment settled');
        } else if (transactionStatus === 'cancel' || transactionStatus === 'deny' || transactionStatus === 'expire') {
            console.log('Payment failed');
        } else if (transactionStatus === 'pending') {
            console.log('Payment pending');
        }

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