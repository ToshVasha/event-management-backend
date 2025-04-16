const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPayments = async (_, res) => {
  const payments = await Payment.find();
  res.json(payments);
};

exports.getPaymentById = async (req, res) => {
  const payment = await Payment.findById(req.params.id);
  payment ? res.json(payment) : res.status(404).send('Payment not found');
};

exports.updatePayment = async (req, res) => {
  const updated = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).send('Payment not found');
};

exports.deletePayment = async (req, res) => {
  const deleted = await Payment.findByIdAndDelete(req.params.id);
  deleted ? res.json({ msg: 'Payment deleted' }) : res.status(404).send('Payment not found');
};