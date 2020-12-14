let express = require('express');
let productosController = require('../controllers/productosController');

let router = express.Router();
router.get ('/detalle', productosController.detalleProducto);
router.get ('/listado', productosController.listadoProducto);

module.exports = router;