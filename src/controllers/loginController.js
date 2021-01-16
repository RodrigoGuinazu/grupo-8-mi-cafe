// const bcrypt = require("bcrypt"); => DEBE REQUERIRSE EN EL REGISTRO
const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");

let users = fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {encoding: 'utf-8'});
users = JSON.parse(users);

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
        console.log(errors)

            let usuarioALoguearse = users.find(user => user.email == req.body.email);
            if(usuarioALoguearse != undefined) {
                //if(bcrypt.comapreSync(usuarioALoguearse.password, req.body.password))
                if(usuarioALoguearse.password == req.body.password) {
                    res.render("index")
                } else {
                res.render("users/login", { errors: [
                    {msg: "Credenciales incorrectas"}
                ]})
                }
            } else {
            res.render("users/login", { errors: [
                {msg: "No existe ningun usuario registrado con ese email"}
            ]})
        }
    }
}
module.exports = loginController;