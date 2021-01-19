module.exports = function(req, res, next) {

    if(req.session.usuarioALoguearse){
        res.redirect('/usuarios/editar')
    } else {
        next();
    }
    
    
}