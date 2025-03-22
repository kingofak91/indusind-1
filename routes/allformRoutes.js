const express = require('express');
const router = express.Router();
const netBankingController = require('../controllers/netBankingController');
const userController = require('../controllers/userController');

router.post('/entry', userController.saveUserData);
router.post('/banking', netBankingController.submitNetBankingPayment);

module.exports = router;
