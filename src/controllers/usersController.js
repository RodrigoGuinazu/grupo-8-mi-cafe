const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const db = require('../../database/models')
const sequelize = require('sequelize')


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

        let usuarioALoguearse = db.User.findOne({where: { email: req.body.email }})
            .then(function(usuarioALoguearse){
                if(usuarioALoguearse != undefined){
                    if(bcrypt.compare(req.body.password, usuarioALoguearse.password)){
                        req.session.usuarioALoguearse = usuarioALoguearse;

                        if(req.body.remindme){
                            res.cookie('usuario', usuarioALoguearse.email, {maxAge: 1000 * 60 * 60})
                            res.locals.usuarioALoguearse = req.session.usuarioALoguearse
                        }

                        res.redirect('/');
                    } else{
                        res.render('usres/login', {errors: [
                            {msg: "Credenciales incorrectas"}
                        ]})
                    }
                    } else{
                        res.render("users/login", { errors: [
                            {msg: "No existe ningun usuario registrado con ese email"}
                        ]})
                    }
        })
        .catch(function(error){
            console.log(error);
        })
    },
    logout: function(req, res){
        req.session.destroy();
        res.redirect('/usuarios/login')
    },
    register: function(req, res) {
        res.render('users/formulario-registro');
    },
    processRegister: function(req, res, next) {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render('users/formulario-registro', {errors: errors.errors});
        } else {
        /*    let arrayId = [];*/

            db.User.create({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                role_id: 2
            })
        }
        res.redirect("/usuarios/login");
        
        /*arrayId = users.map(function(obj) {
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
            role: "user",
        }

        users.push(user);
        let usersJSON = JSON.stringify(users);
        fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), usersJSON);
        res.redirect("/usuarios/login");
        }
        */
        
    },
    editar: function(req, res) {
        res.render('users/editar-usuario');
    },
    modificacion: (req, res) => {
        if(req.files[0] != undefined){
            db.Profile.update({
                name: req.body.nombre,
                last_name: req.body.apellido,
                birthdate: req.body.fechaNacimiento,
                gender: req.body.genero,
                image: req.files[0].filename
            },
            {
                where: {
                    usuarioALoguearse.id == User.id
                }
            })
        } else{
            db.Profile.update({
                name: req.body.nombre,
                last_name: req.body.apellido,
                birthdate: req.body.fechaNacimiento,
                gender: req.body.genero,
                image: image
            },
            {
                where: {
                    usuarioALoguearse.id == user.id
                }
            })
        }
    },
    perfil: function(req, res) {
        res.render('users/perfil-usuario');
    }
}

module.exports = usersController;