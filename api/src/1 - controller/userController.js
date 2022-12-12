const express = require('express');
const router = express.Router();
const userService = require('@service/userService')

router.post('/login',userService.login);
router.get('/login',userService.checkUserLogged);
router.get('/logout',userService.logout);

module.exports = router;