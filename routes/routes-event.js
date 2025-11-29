const express = require ('express');
const router = express.Router();
const  verifyuser = require ('../middleware/middleware-user')
const { hanyaadmin } = require ('../middleware/middleware-admin');

const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require('../controller/controller-event');

router.post('/create', hanyaadmin, createEvent)
router.get('/event', hanyaadmin, getEvents);
router.put('/event/:id', hanyaadmin, updateEvent);
router.delete('/event/:id', hanyaadmin, deleteEvent);

module.exports = router;