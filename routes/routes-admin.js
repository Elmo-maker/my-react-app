const express = require('express');
const router = express.Router();

const verifyuser = require('../middleware/middleware-user')
const {verifyToken} = require('../middleware/middleware-admin'); 

const { getDashboard } = require('../controller/controller-admin');

router.get('/dashboard',verifyToken,verifyuser, getDashboard);

module.exports = router;