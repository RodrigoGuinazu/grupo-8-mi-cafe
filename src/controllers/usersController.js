const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");

let users = fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {encoding: 'utf-8'});
users = JSON.parse(users);

let usersController = {
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
    },
    register: function(req, res) {
        res.render('users/formulario-registro');
    },
    processRegister: function(req, res, next) {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render('users/formulario-registro', {errors: errors.errors});
        } else {
            let arrayId = [];

        arrayId = users.map(function(obj) {
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

        let user = {
            id: nuevoId,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password,
            fechaNacimiento: req.body.fechaNacimiento,
            genero: req.body.genero,
            //imagen: req.files[0].filename,
        }

        users.push(user);
        let usersJSON = JSON.stringify(users);
        fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), usersJSON);
        res.redirect("/usuarios/login");
        }
        
    }
}

module.exports = usersController;