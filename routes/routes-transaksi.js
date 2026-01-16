// const express = require('express');
// const router = express.Router();
// const verifyuser = require("../middleware/middleware-user"); // Middleware untuk User
// const { verifyToken } = require ('../middleware/middleware-admin');

// const {
//     createTransaksi,
//     getAllTransaksi,
//     getTransaksiById
// } = require ("../controller/controller-transaksi");

// // 🔐 Rute Pembelian (WAJIB Login) - POST /transaksi
// router.post("/", verifyuser, createTransaksi);

// // 🔐 Rute Melihat Riwayat (WAJIB Login) - GET /transaksi
// router.get("/tr", verifyuser, getAllTransaksi);
// router.get("/trid/:id", verifyuser, getTransaksiById);

// module.exports = router;
const express = require("express");
const router = express.Router();
const verifyuser = require("../middleware/middleware-user"); // cek token
const verifyAdmin = require("../middleware/middleware-admin"); // cek role admin

const {
  createTransaksi,
  getAllTransaksi,
  getTransaksiById,
  getAllTransaksiAdmin,
  paymentCallback,
  updateTransaksiStatus,
} = require("../controller/controller-transaksi");

// USER - perlu middleware verifyuser untuk bisa akses req.user
router.post("/", verifyuser, createTransaksi); // beli tiket
router.get("/tr", verifyuser, getAllTransaksi); // history user
router.get("/trid/:id", verifyuser, getTransaksiById); // detail transaksi
router.post("/update-status", updateTransaksiStatus); // update status setelah payment

// ADMIN
router.get("/semua", verifyuser, verifyAdmin, getAllTransaksiAdmin);

// MIDTRANS CALLBACK (no auth)
router.post("/callback", express.json(), paymentCallback);

module.exports = router;

