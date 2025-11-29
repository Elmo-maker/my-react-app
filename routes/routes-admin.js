const express = require('express');
const router = express.Router();

const {hanyaadmin} = require('../middleware/middleware-admin'); 

const { getDashboard } = require('../controller/controller-admin');

router.get('/dashboard',hanyaadmin, getDashboard);

module.exports = router;