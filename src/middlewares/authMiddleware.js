module.exports = function(req, res, next) {

    if(req.session.usuarioALoguearse){
        res.locals.user = req.session.usuarioALoguearse;
    }
    next();
    
}