module.exports = function(req, res, next) {

    if(req.session.usuarioALoguearse){
        next();
    } else {
        res.redirect('/usuarios/login')
    }
    
    
}