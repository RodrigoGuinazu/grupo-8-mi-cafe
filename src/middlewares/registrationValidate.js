const {check, body} = require('express-validator');
const path = require('path');
const fs = require('fs');

//let users = fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {encoding: 'utf-8'});
//users = JSON.parse(users);

module.exports = [
    check('name').isLength({min:1}).withMessage('Ingresá tu nombre.'),
    check('lastname').isLength({min:1}).withMessage('Ingresá tu apellido.'),
    check('email').isEmail().withMessage('Ingresá un E-mail válido.'),
    check('password').isStrongPassword().withMessage('La contraseña debe tener al menos 8 caracteres, 1 Mayuscula, 1 Numero y 1 Caracter especial.'),
    body('confirmarPassword')
        .custom(function(value, {req}) {
            if (value == req.body.password) {
                return true;
            }
            return false;
        })
        .withMessage('Las contraseñas no coinciden, intentá nuevamente'),
    body('email')
    .custom(function(value, {req}) {
        for (let i = 0; i < users.length; i++) {
            if(users[i].email == value) {
                if (req.session.usuarioALoguearse != undefined) {
                    if (users[i].id == req.session.usuarioALoguearse.id) {
                        return true;
                    }
                    return false;
                }
                return false;
            }
        }
        return true;
    })
    .withMessage('El email que ingresaste ya está registrado')
  ]