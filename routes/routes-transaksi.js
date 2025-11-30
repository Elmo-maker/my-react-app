const express = require('express');
const router = express.Router();
const verifyuser = require("../middleware/middleware-user"); // Middleware untuk User
const { verifyToken } = require ('../middleware/middleware-admin');

const {
    createTransaksi,
    getAllTransaksi,
    getTransaksiById
} = require ("../controller/controller-transaksi");

// 🔐 Rute Pembelian (WAJIB Login) - POST /transaksi
router.post("/", verifyuser, createTransaksi);

// 🔐 Rute Melihat Riwayat (WAJIB Login) - GET /transaksi
router.get("/", verifyuser, getAllTransaksi);
router.get("/:id", verifyuser, getTransaksiById);

module.exports = router;