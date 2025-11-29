const express = require ('express');
const router = express.Router();
const verifyuser = require ('../middleware/middleware-user')
const { hanyaadmin } = require ('../middleware/middleware-admin');

const {
  createTiket,
  getDetailTiket,
  updateTiket,
  deleteTiket
} = require('../controller/controller-tiket');

router.post('/', verifyuser, hanyaadmin, createTiket)
router.get('/:id_event', hanyaadmin, getDetailTiket);
router.put('/:id', hanyaadmin, updateTiket);
router.delete('/:id', hanyaadmin, deleteTiket);

module.exports = router;