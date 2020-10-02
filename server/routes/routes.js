const express = require('express');
const paymentController = require('../components/payment/payment-controller')
const router = express.Router();

router.post('/save', paymentController.save);


module.exports = router;