const {check, body} = require('express-validator');
//const path = require('path');
//const fs = require('fs');
const sequelize = require('sequelize')

//let users = fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {encoding: 'utf-8'});
//users = JSON.parse(users);

module.exports = [
    check('name').isLength({min:2}).withMessage('Debes ingresar tu nombre.'),
    check('lastname').isLength({min:2}).withMessage('Debes ingresar tu apellido.'),
    check('email').isEmail().withMessage('Debes ingresar un e-mail válido.'),
    check('password').isStrongPassword().withMessage('La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 número y 1 caracter especial. EJ: "Hola123!"'),
    body('confirmarPassword')
        .custom(function(value, {req}) {
            if (value == req.body.password) {
                return true;
            }
            return false;
        })
        .withMessage('Las contraseñas ingresadas deben coincidir. Intentá nuevamente.'),
    /*
        body('email')
        .custom(function(value, {req}) {
        for (let i = 0; i < users.length; i++) {
            if(campoEmail != value) {
                if (req.session.usuarioALoguearse != undefined) {
                    if (User.id == req.session.usuarioALoguearse.id) {
                        return true;
                    }
                    return false;
                }
                return false;
            }
        }
        return true;
    })
    .withMessage('El e-mail que ingresaste, ya está registrado. Intentá con otro.')
    */
    
  ]