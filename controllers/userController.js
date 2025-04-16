const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUsers = async (_, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  user ? res.json(user) : res.status(404).send('User not found');
};

exports.updateUser = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).send('User not found');
};

exports.deleteUser = async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.id);
  deleted ? res.json({ msg: 'User deleted' }) : res.status(404).send('User not found');
};