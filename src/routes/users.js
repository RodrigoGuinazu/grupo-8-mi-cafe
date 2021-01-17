var express = require('express');
var router = express.Router();
let { check, validationResult, body } = require('express-validator');
let registerController = require('../controllers/registerController');


/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

router.get ('/register', registerController.register);
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
],*/ registerController.processRegister);

module.exports = router;
