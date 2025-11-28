const express = require ('express');
const router = express.Router();
const  verifyuser = require ('../middleware/middleware-user')
const { hanyaadm } = require ('../middleware/middleware-admin');

const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require('../controller/controller-event');

router.post('/create', hanyaadm, createEvent)
router.get('/event', hanyaadm, getEvents);
router.put('/event/:id', hanyaadm, updateEvent);
router.delete('/event/:id', hanyaadm, deleteEvent);

module.exports = router;