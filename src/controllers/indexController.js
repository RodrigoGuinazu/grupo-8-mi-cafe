
let indexController = {
    nosotrosMC: function(req, res) {
      res.render('quienes-somos');
      },
    regionesMC: function(req, res) {
        res.render('viaja');
      },
    perfilMC: function(req, res) {
        res.render('perfil-cafe');
      }

};
module.exports = indexController;