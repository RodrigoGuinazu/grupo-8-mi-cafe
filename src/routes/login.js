let express = require('express');
let loginController = require('../controllers/loginController');
const { check, validationResult, body } = require("express-validator");
const path = require('path');

let router = express.Router();
router.get ('/login', loginController.login);
router.post('/login',loginController.processLogin)
//router.get ('/wrong-user', loginController.wrongUser);
//router.get ('/user-not-found', loginController.userNotFound);

module.exports = router;