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
router.post('/login', /*[
  check('nombre').isLength().withMessage('Ingresá tu nombre.'),
  check('apellido').isLength().withMessage('Ingresá tu apellido.'),
	check('email').isEmail().withMessage('Ingresá un Email válido.'),
  check('password').isLength( {min: 8} ).withMessage('Las contraseñas tener al menos 8 caracteres.'),
  check('confirmar-password').equals('password').withMessage('Las contraseñas deben coincidir.')
  /*body('confirmar-password').custom(function(value) {
    if (req.body.password != req.body.confirmar-password) {
      return false;
    } else {
      return true;
    }
  }).withMessage('Las contraseñas deben coincidir.')
],*/ usersController.processRegister);

module.exports = router;
