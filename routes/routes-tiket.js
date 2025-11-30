const express = require ('express');
const router = express.Router();
const verifyuser = require ('../middleware/middleware-user')
const { verifyToken } = require ('../middleware/middleware-admin');

const {
  createTiket,
  getDetailTiket,
  updateTiket,
  deleteTiket
} = require('../controller/controller-tiket');

router.post('/create-ticket', verifyuser, verifyToken, createTiket)
router.get('/detail/:id_event', verifyToken, getDetailTiket);
router.put('/update/:id', verifyToken, updateTiket);
router.delete('/delete/:id', verifyToken, deleteTiket);

module.exports = router;