let express = require('express');
let productosController = require('../controllers/productosController');

let router = express.Router();
router.get ('/detalle', productosController.detalleProducto);
router.get ('/listado', productosController.listadoProducto);
router.get ('/listado/cafes', productosController.listadoCafes);
router.get ('/listado/cafeteras', productosController.listadoCafeteras);
router.get ('/listado/accesorios', productosController.listadoAccesorios);
router.get ('/crear', productosController.crearProducto);
router.get ('/editar', productosController.editarProducto);
//router.delete('/:id', productosController.eliminarProducto)

module.exports = router;