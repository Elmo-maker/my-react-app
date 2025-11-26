const express = require ('express');
const router = express.router();
const { hanyaadm } = require ('/../mdwr/adm');

const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
} = require('../controller/event');

router.post('/create', hanyaadm, createEvent)
router.get('/event', hanyaadm, getEvents);
router.put('/event/:id', hanyaadm, updateEvent);
router.delete('/event/:id', hanyaadm, deleteEvent);

module.exports = router;