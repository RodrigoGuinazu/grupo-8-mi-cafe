// const bcrypt = require("bcrypt"); => DEBE REQUERIRSE EN EL REGISTRO
const fs = require('fs');
const path = require('path');
const { check, validationResult, body } = require("express-validator");

//let users = fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {encoding: 'utf-8'});
//users = JSON.parse(users);

let loginController = {
    login: function(req, res) {
        return res.render('users/login');           
    },
    //wrongUser: function(req, res) {
        //res.render('users/login-wrong-user');
    //},
    //userNotFound: function(req, res) {
        //res.render('users/login-user-not-found');
    //},
    processLogin: function(req, res) {
        let errors = validationResult(req);

        if(errors.isEmpty) {
            let usersJSON = fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {encoding: 'utf-8'});
            let usuarios;
            if(usersJSON == "") {
                usuarios = [];
            } else {
                usuarios = JSON.parse(usersJSON);
            }

            for(let i = 0; i < usuarios.length; i++) {
                if(req.body.email == usuarios[i].email) {
                    if(bcrypt.compareSync(req.body.password, usuarios[i].password)) {
                        let usuarioALoguearse = usuarios[i];
                        break;
                    }
                } 
            }

            if (usuarioALoguearse == undefined) { // => Si el usuario aun es undefined que arroje errores. Si ya encontro y valido email y contraseña en el for, ¿Por que seria undefined?
                return res.render("login", { errors: [
                    {msge: "Credenciales Invalidas"}
                ]})
            }

        } else {
            return res.render("login", {errors: errors.errors}); // => consultar la logica de errors: errors.errors
        }
    }
}

module.exports = loginController;