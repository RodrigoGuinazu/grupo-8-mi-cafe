let express = require('express');
let loginController = require('../controllers/loginController');
const { check, validationResult, body } = require("express-validator");
const path = require('path');

let router = express.Router();
router.get ('', loginController.login)
router.post('', [
    check("email").isEmail().withMessage("El email no es válido"),
    check("password").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
] ,loginController.processLogin)
//router.get ('/wrong-user', loginController.wrongUser);
//router.get ('/user-not-found', loginController.userNotFound);

module.exports = router;