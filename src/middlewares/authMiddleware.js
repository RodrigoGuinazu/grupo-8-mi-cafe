module.exports = function(req, res, next) {

    if(req.session.usuarioALoguearse){
        res.locals.user = req.session.usuarioALoguearse;
    } else if(req.cookies.usuario){
        req.session.usuarioALoguearse = req.cookies.usuario;
        res.locals.user = req.cookies.usuario;
    }
    next();
    
}


db.Profile.update({
    name = req.body.nombre,
    last_name = req.body.apellido,
    birthdate = req.body.fechaNacimiento,
    gender = req.body.genero,
    if (req.files[0] != undefined){
        imagen = req.files[0].filename
    }
},
{
    where: {
        req.session.usuarioALoguearse.id == user.id
    }
}
)
res.redirect("/usuarios/login");
},

/*users.forEach(user => {
    if(req.session.usuarioALoguearse.id == user.id){
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
},*/