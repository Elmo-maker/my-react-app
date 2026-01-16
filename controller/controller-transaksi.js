// const {PrismaClient} = require("@prisma/client")
// const prisma = new PrismaClient();

// module.exports = {

// createTransaksi: async (req, res) => {
//   try {
//     const { tiketId, jumlah } = req.body;

//     // AMBIL USER ID DARI TOKEN (BUKAN DARI BODY)
//     const loginId = req.user.id;

//     const tiket = await prisma.detail_tiket.findUnique({
//       where: { id_tiket: tiketId }
//     });

//     if (!tiket) {
//       return res.status(404).json({ message: "Tiket tidak ditemukan" });
//     }

//     if (jumlah <= 0) {
//       return res.status(400).json({ message: "Jumlah tiket tidak valid" });
//     }

//     const total_harga = tiket.harga_tiket * jumlah;

//     const result = await prisma.transaksi.create({
//       data: {
//         loginId,
//         tiketId,
//         jumlah,
//         total_harga,
//         status: "pending" 
//       }
//     });
//      const snap = new midtransClient.Snap({
//       isProduction: false,
//       serverKey: process.env.MIDTRANS_SERVER_KEY
//     });

//     const transaction = await snap.createTransaction({
//       transaction_details: {
//         order_id: orderId,
//         gross_amount: total_harga
//       },
//       customer_details: {
//         first_name: req.user.username,
//         email: req.user.email
//       }
//     });

//     res.json({
//       message: "Transaksi berhasil dibuat",
//       data: result
//     });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// },


//   // getAllTransaksi: async (req, res) => {
//   //   try {
//   //     const transaksi = await prisma.transaksi.findMany({
//   //       include: {
//   //         user: { select: { username: true, email: true, role: true } },
//   //         tiket: {
//   //           include: {
//   //             event: true
//   //           }
//   //         }
//   //       }
//   //     });

//   //     res.json(transaksi);

//   //   } catch (err) {
//   //     res.status(500).json({ error: err.message });
//   //   }
//   // },
//   getAllTransaksi: async (req, res) => {
//   try {
//     const isAdmin = req.user.role === "admin";

//     const transaksi = await prisma.transaksi.findMany({
//       where: isAdmin
//         ? {} // ADMIN → semua transaksi
//         : { loginId: req.user.id }, // USER → transaksi sendiri
//       include: {
//         user: { select: { username: true, email: true, role: true } },
//         tiket: { include: { event: true } }
//       }
//     });

//     res.json(transaksi);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// },


//   getTransaksiById: async(req, res)=> {
//     try {
//         const {id} = req.params;

//         const transaksi = await prisma.transaksi.findUnique({
//             where: {id_transaksi: Number(id)},
//             include:{
//                 user:{select: {username: true, email:true, role:true }},
//                 tiket: {
//                     include: {
//                         event: true
//                     }
//                 }
//             }
//         });
//         if (!transaksi) {
//             return res.status(500).json({message:"Transaksi tidak ada"});
//         }
//         res.json(transaksi)
//     }catch(err) {
//         res.status(500).json({error:err.message});
//     }
//   },

//   getAllTransaksiAdmin: async (req, res) => {
//   try {
//     const transaksi = await prisma.transaksi.findMany({
//       include: {
//         user: {
//           select: {
//             username: true,
//             email: true,
//           },
//         },
//         tiket: {
//           include: {
//             event: true,
//           },
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     res.json(transaksi);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// },

// };

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const midtransClient = require("midtrans-client"); // pastikan sudah install

module.exports = {
  // BUAT TRANSAKSI + SNAP MIDTRANS
  createTransaksi: async (req, res) => {
    try {
      const { tiketId, jumlah } = req.body;
      const loginId = req.user.id;

      // AMBIL TIKET
      const tiket = await prisma.detail_tiket.findUnique({
        where: { id_tiket: tiketId },
      });
      if (!tiket) return res.status(404).json({ message: "Tiket tidak ditemukan" });
      if (jumlah <= 0) return res.status(400).json({ message: "Jumlah tiket tidak valid" });

      const total_harga = tiket.harga_tiket * jumlah;
      const orderId = `ORDER-${Date.now()}`;

      // SIMPAN TRANSAKSI KE DATABASE
      const result = await prisma.transaksi.create({
        data: {
          loginId,
          tiketId,
          jumlah,
          total_harga,
          status: "pending",
          order_id: orderId,
        },
      });

      // BUAT SNAP MIDTRANS
      const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.MIDTRANS_SERVER_KEY,
      });

      const transaction = await snap.createTransaction({
        transaction_details: {
          order_id: orderId,
          gross_amount: total_harga,
        },
        customer_details: {
          first_name: req.user.username,
          email: req.user.email,
        },
      });

      res.json({
        message: "Transaksi berhasil dibuat",
        data: result,
        snapToken: transaction.token, // kirim token ke frontend buat redirect
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // HISTORY USER
  getAllTransaksi: async (req, res) => {
    try {
      console.log('=== GET ALL TRANSAKSI USER ===');
      console.log('req.user:', req.user);
      console.log('Looking for loginId:', req.user.id);

      const transaksi = await prisma.transaksi.findMany({
        where: { loginId: req.user.id },
        include: {
          login: { select: { username: true, email: true } },
          event: true,
        },
        orderBy: { tanggal_transaksi: "desc" },
      });

      console.log('Found transaksi count:', transaksi.length);
      console.log('Transaksi data:', JSON.stringify(transaksi, null, 2));

      res.json(transaksi);
    } catch (err) {
      console.error('Error in getAllTransaksi:', err);
      res.status(500).json({ error: err.message });
    }
  },

  getTransaksiById: async (req, res) => {
    try {
      const { id } = req.params;
      const transaksi = await prisma.transaksi.findUnique({
        where: { id_transaksi: Number(id) },
        include: {
          login: { select: { username: true, email: true } },
          event: true,
        },
      });
      if (!transaksi) return res.status(404).json({ message: "Transaksi tidak ada" });
      res.json(transaksi);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // SEMUA TRANSAKSI UNTUK ADMIN
  getAllTransaksiAdmin: async (req, res) => {
    try {
      const transaksi = await prisma.transaksi.findMany({
        include: {
          login: { select: { username: true, email: true } },
          event: true,
        },
        orderBy: { tanggal_transaksi: "desc" },
      });
      res.json(transaksi);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // CALLBACK MIDTRANS (update status otomatis)
  paymentCallback: async (req, res) => {
    try {
      const { order_id, transaction_status } = req.body;

      let status = "pending";
      if (transaction_status === "capture" || transaction_status === "settlement") status = "paid";
      else if (transaction_status === "cancel" || transaction_status === "deny" || transaction_status === "expire")
        status = "failed";

      await prisma.transaksi.updateMany({
        where: { orderId: order_id },
        data: { status },
      });

      res.json({ message: "Callback diterima" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // UPDATE STATUS dari frontend setelah payment success (untuk development karena webhook tidak bisa ke localhost)
  updateTransaksiStatus: async (req, res) => {
    try {
      const { orderId, status } = req.body;

      console.log('Updating transaction status:', { orderId, status });

      const result = await prisma.transaksi.updateMany({
        where: { orderId: orderId },
        data: { status: status },
      });

      console.log('Updated count:', result.count);
      res.json({ message: "Status berhasil diupdate", count: result.count });
    } catch (err) {
      console.error('Error updating status:', err);
      res.status(500).json({ error: err.message });
    }
  },
};
