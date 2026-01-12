const express = require ('express');
const router = express.Router();
const  verifyuser = require ('../middleware/middleware-user')
const  verifyAdmin  = require ('../middleware/middleware-admin');

const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require('../controller/controller-event');

router.post('/create',verifyuser, verifyAdmin, createEvent)
router.get('/all', verifyuser, verifyAdmin, getEvents);
router.put('/upd/:id', verifyuser, verifyAdmin, updateEvent);
router.delete('/del/:id', verifyuser, verifyAdmin, deleteEvent);
module.exports = router;