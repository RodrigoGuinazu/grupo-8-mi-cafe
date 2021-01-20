module.exports = function(req, res, next) {

    if(req.session.usuarioALoguearse){
        res.locals.user = req.session.usuarioALoguearse;
    } else if(req.cookies.usuarioALoguearse){
        req.session.usuarioALoguearse = req.cookies.usuario;
        res.locals.user = req.cookies.usuario;
    }
    next();
    
}