const {check, body} = require('express-validator');
const sequelize = require('sequelize')

module.exports = [
    check('name').isLength({min:2}).withMessage('Debes ingresar tu nombre.'),
    check('lastname').isLength({min:2}).withMessage('Debes ingresar tu apellido.'),
    check('email').isEmail().withMessage('Debes ingresar un e-mail válido.'),
    check('password').isStrongPassword().withMessage('La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 número y 1 caracter especial. EJ: "Hola123!"'),
    body('confirmarPassword')
        .custom(function(value, {req}) {
            if (value == req.body.password) {
                return true;
            } else {
                throw new Error('Las contraseñas ingresadas deben coincidir. Intentá nuevamente.');
            }
        })
  ]