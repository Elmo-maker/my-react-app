const express = require('express');
const router = express.Router();
const { register, login, loginGoogle } = require('../controller/controller-login');

router.post('/register', register);
router.post('/login', login);
router.post('/google', loginGoogle);

module.exports = router;