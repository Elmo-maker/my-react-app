const express = require ('express');
const router = express.Router();
const  verifyuser = require ('../middleware/middleware-user')
const { verifyToken } = require ('../middleware/middleware-admin');

const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require('../controller/controller-event');

router.post('/create', verifyToken, createEvent)
router.get('/event', verifyToken, getEvents);
router.put('/event/:id', verifyToken, updateEvent);
router.delete('/event/:id', verifyToken, deleteEvent);

module.exports = router;