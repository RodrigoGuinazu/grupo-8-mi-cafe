const {check} = require('express-validator');

module.exports = [
    check('nombre').isLength().withMessage('Ingresá tu nombre.'),
    check('apellido').isLength().withMessage('Ingresá tu apellido.'),
    check('email').isEmail().withMessage('Ingresá un E-mail válido.'),
    check('password').isLength( {min: 8} ).withMessage('La contraseña debe tener al menos 8 caracteres.'),
    /*body('confirmarPassword').custom(function(value) {
      if ('password' != 'confirmarPassword') {
        return true;
      } else {
        return false;
      }
    }).withMessage('Las contraseñas deben coincidir.')*/
  ]