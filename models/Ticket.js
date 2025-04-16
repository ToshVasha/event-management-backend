const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketId: { type: String, required: true },
  userId: { type: String, required: true },
  eventId: { type: String, required: true },
  status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' },
  type: { type: String, enum: ['general', 'vip'], default: 'general' },
  price: { type: Number, required: true },
  issuedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);