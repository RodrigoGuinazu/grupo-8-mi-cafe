var express = require('express');
var router = express.Router();
let { check, validationResult, body } = require('express-validator');
let registerController = require('../controllers/registerController');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get ('/register', registerController.register);
router.post('/register', [
	check('email').isEmail().withMessage('Email inválido'),
  check('password').isLength( {min: 8} ),
  body('confirmar-password').custom(function(value) {
    if (req.body.password != req.body.confirmar-password) {
      return false;
    } else {
      return true;
    }
  }).withMessage('Las contraseñas deben coincidir.')
], registerController.processRegister);

module.exports = router;
