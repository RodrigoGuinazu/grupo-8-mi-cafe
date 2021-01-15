// const bcrypt = require("bcrypt"); => DEBE REQUERIRSE EN EL REGISTRO
const fs = require('fs');
const path = require('path');

let users = fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {encoding: 'utf-8'});
users = JSON.parse(users);

let loginController = {
    login: function(req, res) {
        res.render('users/login');           
    },
    wrongUser: function(req, res) {
        res.render('users/login-wrong-user');
    },
    userNotFound: function(req, res) {
        res.render('users/login-user-not-found');
    },
    processLogin: function(req, res) {
        //let usuarios;
        //if(users == "") {
            //usuarios = []
        //} else {
            //usuarios = JSON.parse(users)
        //}

        for(let i = 0; i < users.length; i++) {
            if(req.body.email == users[i].email && req.body.password == users[i].password) {
                res.send("Estas logueado")
            } else {
                res.send("Error")
            }
        }
    }
}

module.exports = loginController;