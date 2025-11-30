const express = require('express');
const router = express.Router();
const { createTransaction, handleNotification } = require('../controller/controller-midtrans');

// Route untuk membuat transaksi baru
router.post('/create-transaction', createTransaction);

// Route untuk webhook notification dari Midtrans
router.post('/notification', handleNotification);

module.exports = router;