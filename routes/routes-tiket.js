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

router.post('/', verifyuser, verifyToken, createTiket)
router.get('/:id_event', verifyToken, getDetailTiket);
router.put('/:id', verifyToken, updateTiket);
router.delete('/:id', verifyToken, deleteTiket);

module.exports = router;