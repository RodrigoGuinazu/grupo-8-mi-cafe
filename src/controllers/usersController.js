const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const db = require('../../database/models')
const sequelize = require('sequelize');
const User = require("../../database/models/User");

let usersController = {
    // VISTA LOGIN
    login: function(req, res) {
        return res.render('users/login');           
    },
    // LOGICA LOGIN
    processLogin: function(req, res) {
        let errors = validationResult(req);
        
        db.User.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then(usuarioALoguearse => {
            //return res.send(usuarioALoguearse)
            console.log(usuarioALoguearse);
            if(usuarioALoguearse){
                let comparacion = bcrypt.compareSync(req.body.password, usuarioALoguearse.password);

                if(comparacion){
                    req.session.usuarioALoguearse = usuarioALoguearse;

                    if(req.body.remindme){
                        res.cookie('usuario', req.session.usuarioALoguearse, {maxAge: 1000 * 60 * 60});
                        res.locals.usuarioALoguearse = req.session.usuarioALoguearse;
                    }
                    res.redirect('/');
                } else{
                    res.render('users/login', {errors: {msg: "Credenciales incorrectas"}})
                }
            } else{
                res.render('users/login', {errors: {msg: "Credenciales incorrectas"}})
            }
        })
        .catch(function(error){
            console.log(error);
        })
    },
    // LOGICA LOGOUT
    logout: function(req, res){
        req.session.destroy();
        res.redirect('/usuarios/login')
    },
    // VISTA REGISTRO
    register: function(req, res) {
        res.render('users/formulario-registro', {errors: {}});
    },
    // LOGICA DE REGISTRO
    processRegister: function(req, res) {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log(errors.mapped())
            console.log(typeof errors.lastname)
            return res.render('users/formulario-registro', {errors: errors.mapped()});
        } else {
            console.log("Se ejecutó")
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((result) => {
                console.log(result)
                    if (result != null) {
                        let errRegister = 'El e-mail que ingresaste, ya está registrado. Intentá con otro.'
                        res.render('users/formulario-registro', {errors: {}, errRegister: errRegister});
                    } else {
                        console.log("Se ejecutó 2")
                        db.User.create({
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            name: req.body.name,
                            lastname: req.body.lastname,
                            role_id: 2,
                            image: 'avatar_placeholder.png'
                        })
                        .then(result => {
                            res.redirect("/usuarios/login");
                        });
                    }
                })
            .catch(error => {
                console.log(error);
                res.send(error)
            })
        }
    },
    // VISTA EDITAR
    editar: function(req, res) {
        res.render('users/editar-usuario');
    },
    // LOGICA EDICION
    modificacion: (req, res) => {
        db.User.update({
            name: req.body.name,
            lastname: req.body.lastname,
            birthdate: req.body.birthdate,
            gender: req.body.gender
        },
        {
            where: {
                id: res.locals.user.id
            }
        })
        .then( resultado => {
            res.redirect('/usuarios/perfil')
            })
        .catch(error => {
            res.send(error)
        })
    },
    // VISTA PERFIL
    perfil: function(req, res) {
        res.render('users/perfil-usuario');
    },

    // VISTA AVATAR
    avatar: function(req, res) {
        res.render('users/avatar');
    },

    // VISTA DIRECCIONES
    direcciones: function(req, res) {
        res.render('users/direcciones');
    },

    // VISTA PARA AGREGAR UNA DIRECCION
    crearDireccion: function(req, res) {
        res.render('users/crear-direccion');
    },

    // VISTA PAGOS
    pagos: function(req, res) {
        res.render('users/pagos');
    },

    // VISTA PARA AGREGAR UN METODO DE PAGO
    crearPago: function(req, res) {
        res.render('users/crear-pago');
    },

    // LOGICA BORRADO
    delete: (req, res) => {
        db.User.destroy({
            where: {
                id: res.locals.user.id
            }
        })
        .then( resultado => {
                 req.session.destroy();
                 res.redirect('/')
            })
        .catch(error => {
            res.send(error)
        })
        }

}

module.exports = usersController;