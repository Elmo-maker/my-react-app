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

router.post('/create', createEvent)
router.get('/all', getEvents);
router.put('/upd/:id', verifyToken, updateEvent);
router.delete('/del/:id', verifyToken, deleteEvent);
module.exports = router;