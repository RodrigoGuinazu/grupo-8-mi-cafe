const {check, body} = require('express-validator');

module.exports = [
    check('nombre').isLength({min:1}).withMessage('Ingresá tu nombre.'),
    check('apellido').isLength({min:1}).withMessage('Ingresá tu apellido.'),
    check('email').isEmail().withMessage('Ingresá un E-mail válido.'),
    check('password').isStrongPassword().withMessage('La contraseña debe tener al menos 8 caracteres, 1 Mayuscula, 1 Numero y 1 Caracter especial.'),
    body('confirmarPassword')
        .custom(function(value, {req}) {
            if (value == req.body.password) {
                return true;
            }
            return false;
        })
        .withMessage('Las contraseñas no coinciden, intentá nuevamente')
  ]