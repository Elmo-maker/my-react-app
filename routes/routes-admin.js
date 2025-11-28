const express = require('express');
const router = express.Router();

const {hanyaadm} = require('../middleware/middleware-admin'); 

const { getDashboard } = require('../controller/controller-admin');

router.get('/dashboard',hanyaadm, getDashboard);

module.exports = router;