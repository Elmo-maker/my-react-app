const express = require ('express');
const router = express.Router();
const verifyuser = require ('../middleware/middleware-user')
const { hanyaadm } = require ('../middleware/middleware-admin');

const {
  createTiket,
  getDetailTiket,
  updateTiket,
  deleteTiket
} = require('../controller/controller-tiket');

router.post('/', verifyuser, hanyaadm, createTiket)
router.get('/:id_event', hanyaadm, getDetailTiket);
router.put('/:id', hanyaadm, updateTiket);
router.delete('/:id', hanyaadm, deleteTiket);

module.exports = router;