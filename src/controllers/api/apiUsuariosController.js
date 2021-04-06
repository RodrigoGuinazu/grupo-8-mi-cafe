const db = require('../../../database/models');
const User = require('../../../database/models/User')

let apiUsuariosController = {

    listado: function(req, res){
        db.User.findAll()
        .then(function(users){

            let user = users.map((user) => {
                return ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    detail: 'http://localhost:3030/api/users/' + user.id
                })
            })

            let respuesta = {
                meta: {
                    status: 200,
                    total: users.length
                },
                data: user
            }

            res.json(respuesta)
        })
        .catch(function(error){
            console.log(error)
        })

    },

    detalle: function(req, res){
        db.User.findOne({
            where: {	
                id: req.params.id   
			},
            include: 'role'
        })
        .then(function(user){

            let respuesta = {
                meta: {
                    status: 200,
                    name: user.name
                },
                data: {
                    name: user.name,
                    lastname: user.lastname,
                    image: 'http://localhost:3030/images/users/' + user.image,
                    birthdate: user.birthdate,
                    gender: user.gender,
                    role: user.role.type
                }
            }

            res.json(respuesta)
        })
        .catch(function(error){
            console.log(error)
        })
    }

}

module.exports = apiUsuariosController;