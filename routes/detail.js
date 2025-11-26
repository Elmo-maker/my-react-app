const express = require ('express');
const router = express.router();
const { hanyaadm } = require ('/../mdwr/adm');

const {
  createTiket,
  getDetailTiket,
  updateTiket,
  deleteTiket
} = require('../controller/tiket');

router.post('/', hanyaadm, createTiket)
router.get('/:id_event', hanyaadm, getDetailTiket);
router.put('/:id', hanyaadm, updateTiket);
router.delete('/:id', hanyaadm, deleteTiket);

module.exports = router;