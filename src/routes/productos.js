let express = require('express');
let productosController = require('../controllers/productosController');
const path = require('path');
let multer = require('multer');
let multerProductos = require('../middlewares/multerProductos');


let router = express.Router();
router.get ('/detalle', productosController.detalleProducto);
router.get ('/listado', productosController.listadoProducto);
router.get ('/:id/detalle', productosController.detalleProducto);
router.get ('/listado/cafes', productosController.listadoCafes);
router.get ('/listado/cafeteras', productosController.listadoCafeteras);
router.get ('/listado/accesorios', productosController.listadoAccesorios);
router.get ('/crear', productosController.crearProducto);
router.post('/crear', multerProductos().any(), productosController.guardarProducto);
router.get ('/:id/editar', productosController.editarProducto);
router.put ('/:id/detalle', multerProductos().any(), productosController.modificacion);
router.delete ('/:id/editar', productosController.eliminarProducto);

module.exports = router;