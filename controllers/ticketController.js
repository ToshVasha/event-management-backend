const Ticket = require('../models/Ticket');

exports.createTicket = async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTickets = async (_, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
};

exports.getTicketById = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  ticket ? res.json(ticket) : res.status(404).send('Ticket not found');
};

exports.updateTicket = async (req, res) => {
  const updated = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).send('Ticket not found');
};

exports.deleteTicket = async (req, res) => {
  const deleted = await Ticket.findByIdAndDelete(req.params.id);
  deleted ? res.json({ msg: 'Ticket deleted' }) : res.status(404).send('Ticket not found');
};