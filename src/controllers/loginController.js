const bcrypt = require("bcrypt");
const fs = require('fs');

let users = fs.readFileSync(path.resolve(__dirname, '../data/users.json'), {encoding: 'utf-8'});
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
        let archivoUsuario
    })
}

module.exports = loginController;