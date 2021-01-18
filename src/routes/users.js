let express = require('express');
const path = require('path');
let multer = require('multer');
let multerUsuarios = require('../middlewares/multerUsuarios');
let { check, validationResult, body } = require('express-validator');
let usersController = require('../controllers/usersController');


var router = express.Router();
router.get ('/login', usersController.login);
router.post('/login',usersController.processLogin);
router.get ('/register', usersController.register);
router.post('/register', multerUsuarios.any(), [
  check('nombre').isLength().withMessage('Ingresá tu nombre.'),
  check('apellido').isLength().withMessage('Ingresá tu apellido.'),
	check('email').isEmail().withMessage('Ingresá un Email válido.'),
  check('password').isLength( {min: 8} ).withMessage('La contraseña debe tener al menos 8 caracteres.'),
  /*body('confirmarPassword').custom(function(value) {
    if ('password' != 'confirmarPassword') {
      return true;
    } else {
      return false;
    }
  }).withMessage('Las contraseñas deben coincidir.')*/
], usersController.processRegister);

module.exports = router;
