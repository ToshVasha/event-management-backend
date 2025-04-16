const express = require('express');
const router = express.Router();
const paymentCtrl = require('../controllers/paymentController');

router.post('/', paymentCtrl.createPayment);
router.get('/', paymentCtrl.getPayments);
router.get('/:id', paymentCtrl.getPaymentById);
router.put('/:id', paymentCtrl.updatePayment);
router.delete('/:id', paymentCtrl.deletePayment);

module.exports = router;