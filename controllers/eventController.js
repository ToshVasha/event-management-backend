const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEvents = async (_, res) => {
  const events = await Event.find();
  res.json(events);
};

exports.getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  event ? res.json(event) : res.status(404).send('Event not found');
};

exports.updateEvent = async (req, res) => {
  const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).send('Event not found');
};

exports.deleteEvent = async (req, res) => {
  const deleted = await Event.findByIdAndDelete(req.params.id);
  deleted ? res.json({ msg: 'Event deleted' }) : res.status(404).send('Event not found');
};