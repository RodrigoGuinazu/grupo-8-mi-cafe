module.exports = function(req, res, next) {

  res.locals.user = false;

  if(req.session.usuarioALoguearse){
    res.locals.user = req.session.usuarioALoguearse;
  }else if(req.cookies.recordame){
    res.locals.user = req.cookies.recordame;
    req.session.usuarioALoguearse = req.cookies.recordame;
  }

  next();
    
}