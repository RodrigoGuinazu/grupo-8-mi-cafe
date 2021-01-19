const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt');

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

            let usuarioALoguearse = users.find(user => user.email == req.body.email);
            console.log(usuarioALoguearse);
            if(usuarioALoguearse != undefined) {
                if(bcrypt.compareSync(req.body.password, usuarioALoguearse.password)) {
                    req.session.usuarioALoguearse = usuarioALoguearse;
                    res.send("el usuario logueado es " + usuarioALoguearse.email);
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
            password: bcrypt.hashSync(req.body.password, 10),
            fechaNacimiento: "",
            direccion: "",
            genero: "",
            imagen: "",
        }

        users.push(user);
        let usersJSON = JSON.stringify(users);
        fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), usersJSON);
        res.redirect("/usuarios/login");
        }
        
    },
    editar: function(req, res) {
        const id = req.params.id
        let userToEdit = users.find(user => user.id == id);

        res.render('users/editar-usuario', {userToEdit: userToEdit});
    },
    modificacion: (req, res) => {
        users.forEach(user => {
            if(req.params.id == user.id){
                user.nombre = req.body.nombre
                user.apellido = req.body.apellido
                user.fechaNacimiento = req.body.fechaNacimiento
                user.direccion = req.body.direccion
                user.genero = req.body.genero
                if (req.files[0] != undefined){
                    user.imagen = req.files[0].filename
                }
            }
            
            
        });
        const JSONuser = JSON.stringify(users);
        fs.writeFileSync(path.join(__dirname, '..','data','usuarios.json'), JSONuser);
        res.redirect('/')
    },


}

module.exports = usersController;