let express = require('express');
let detalleController = require('../controllers/detalleController');

let router = express.Router();
router.get ('', detalleController.detalleProducto);

module.exports = router;