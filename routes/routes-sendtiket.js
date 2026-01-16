const express = require ("express");
const router = express.Router();
const sendTiketController = require("../controller/controller-tiket");

router.post("/email", sendTiketController.sendQrToEmail);

module.exports = router;