const express = require('express');
const router = express.Router();
const clientService = require('@service/clientService');

router.post('/check',clientService.checkClientAccountExists);
router.post('/register',clientService.setClient);

module.exports = router;