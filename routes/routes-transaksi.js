const express = require('express');
const router = express.Router();
const verifyuser = require("../middleware/middleware-user");
const { verifyToken } = require ('../middleware/middleware-admin');

const {
    createTransaksi,
    getAllTransaksi,
    getTransaksiById
} = require ("../controller/controller-transaksi");
const { route } = require('./routes-login');

router.post("/", createTransaksi);
router.get("/", getAllTransaksi);
router.get("/:id", getTransaksiById);

module.exports = router;