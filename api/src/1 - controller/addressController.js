const express = require('express');
const router = express.Router();
const addressService = require('@service/addressService');

router.post('/register', addressService.setAddress);

module.exports = router;