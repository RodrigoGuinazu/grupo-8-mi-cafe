const fs = require('fs');
const path = require('path');
let { check, validationResult, body } = require('express-validator');

let users = fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {encoding: 'utf-8'});
users = JSON.parse(users);


let registerController = {

    register: function(req, res) {
        res.render('users/formulario-registro');
    },
    processRegister: function(req, res) {
        let errors = validationResult(req);

        let arrayId = [];

        arrayId = products.map(function(obj) {
            return obj.id
        })

        let mayorId = arrayId.reduce((a, b) => {
            if(a > b) {
                return a
            } else {
                return b
            }
        })

        let nuevoId = mayorId+1;

        if (errors.isEmpty()) {
            if (usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }
        
        let user = {
            id: nuevoId,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password,
            confirmarPassword: req.body.confirmar-password,
            fechaNacimiento: req.body.fecha-nacimiento,
            genero: req.body.genero,
            imagen: req.files[0].filename,
        };
        users.push(user)
        users = JSON.stringify(users);
        fs.writeFileSync('usuarios.json', usersJSON);
        return res.render('/');
        } else {
            res.render("users/register", { errors: errors.errors})
    }
    }
}
module.exports= registerController;

//processRegister: no verifica 