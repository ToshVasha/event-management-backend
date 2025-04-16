const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/ticketController');

router.post('/', ticketCtrl.createTicket);
router.get('/', ticketCtrl.getTickets);
router.get('/:id', ticketCtrl.getTicketById);
router.put('/:id', ticketCtrl.updateTicket);
router.delete('/:id', ticketCtrl.deleteTicket);

module.exports = router;