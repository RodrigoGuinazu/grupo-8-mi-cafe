const db = require('../../database/models')
const User = require("../../database/models/User");

module.exports = function(req, res, next) {

    if(req.cookies.recordame && !req.session.usuarioALoguearse) {
        db.User.findOne({
          where: {
            password: req.cookies.recordame
          }
        })
        .then(function(user){
          return req.session.usuarioALoguearse = user
        })
        .catch(function(error){
            console.log(error);
        })
    }

    if(req.session.usuarioALoguearse){
        res.locals.user = req.session.usuarioALoguearse;
    } 

    next();
    
}