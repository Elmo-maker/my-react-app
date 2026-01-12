const express = require('express');
const router = express.Router();

const verifyuser = require('../middleware/middleware-user')
const verifyAdmin = require('../middleware/middleware-admin'); 

const { getDashboard } = require('../controller/controller-admin');

router.get('/dashboard',verifyuser, verifyAdmin, getDashboard);

module.exports = router;