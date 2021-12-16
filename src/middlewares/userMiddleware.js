let userMiddleware = {
    registered: function(req, res, next) {
        if(req.session.usuarioALoguearse){
            res.redirect('/usuarios/perfil')
        } else {
            next();
        }
    },
    guest: function(req, res, next) {
        if(req.session.usuarioALoguearse){
            next();
        } else {
            res.redirect('/usuarios/login')
        }
    },
    admin: function(req, res, next){
        if(req.session.usuarioALoguearse && req.session.usuarioALoguearse.role_id == 1){
            next();
        } else {
            res.redirect('/')
        }
    }
}

module.exports = userMiddleware;