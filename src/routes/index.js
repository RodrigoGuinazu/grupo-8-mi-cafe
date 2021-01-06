var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/conoceme', indexController.nosotrosMC);
router.get('/viaja', indexController.regionesMC);
router.get('/encontralo', indexController.perfilMC);

module.exports = router;
