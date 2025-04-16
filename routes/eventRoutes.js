const express = require('express');
const router = express.Router();
const eventCtrl = require('../controllers/eventController');

router.post('/', eventCtrl.createEvent);
router.get('/', eventCtrl.getEvents);
router.get('/:id', eventCtrl.getEventById);
router.put('/:id', eventCtrl.updateEvent);
router.delete('/:id', eventCtrl.deleteEvent);

module.exports = router;