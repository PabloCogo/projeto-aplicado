const express = require('express');
const router = express.Router();
const employeeService = require('@service/employeeService');

router.post('/check',employeeService.checkEmployeeAccountExists);
router.post('/register',employeeService.setEmployee);

module.exports = router;