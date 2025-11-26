const express = require('express');
const router = express.Router();
const { verifyToken, hanyaAdmin } = require('../mdwr/adm');
const { getDashboard } = require('../controller/adminx');

router.get('/dashboard', verifyToken, hanyaAdmin, getDashboard);

module.exports = router;