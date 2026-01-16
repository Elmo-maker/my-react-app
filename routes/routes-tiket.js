const express = require ('express');
const router = express.Router();
const verifyuser = require ('../middleware/middleware-user')
const verifyAdmin  = require ('../middleware/middleware-admin');

const {
  createTiket,
  getDetailTiket,
  updateTiket,
  deleteTiket
} = require('../controller/controller-tiket');

router.post('/create-ticket', verifyuser, verifyAdmin, createTiket)
router.get('/detail/:id_event', verifyAdmin, getDetailTiket);
router.put('/update/:id', verifyAdmin, updateTiket);
router.delete('/delete/:id', verifyAdmin, deleteTiket);

module.exports = router;