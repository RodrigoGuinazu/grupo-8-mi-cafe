// const bcrypt = require("bcrypt"); => DEBE REQUERIRSE EN EL REGISTRO
const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt")

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

        if(errors.isEmpty) {
            let usuarioALoguearse = users.find(user => user.email == req.body.email);
            console.log(usuarioALoguearse);

            if(usuarioALoguearse != undefined) {
                if(bcrypt.compareSync(usuarioALoguearse.password, req.body.password)) {
                    return res.redirect("/productos/listado")
                } else {
                    res.render("login", { msge: "Credenciales inválidas"})
                }
            } else {
                 res.render("login", { msge: "Credenciales inválidas"});
            }
        } else {
            res.render("login", {errors: errors.errors});
        }
    }    
}

module.exports = loginController;