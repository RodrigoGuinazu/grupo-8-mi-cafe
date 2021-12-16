let express = require('express');
let productosController = require('../controllers/productosController');
let multer = require('multer');
let multerProductos = require('../middlewares/multerProductos');
let indexController = require('../controllers/indexController');
const userMiddleware = require('../middlewares/userMiddleware');
const productValidator = require('../middlewares/productValidator');

let router = express.Router();
router.get ('/detalle', productosController.detalleProducto);
router.get ('/listado', productosController.listadoProducto);
router.get ('/resultado', productosController.buscarProducto);
router.get ('/:id/detalle', productosController.detalleProducto);
router.get ('/listado/cafes', productosController.listadoCafes);
router.get ('/listado/cafeteras', productosController.listadoCafeteras);
router.get ('/listado/accesorios', productosController.listadoAccesorios);
router.get ('/crear', userMiddleware.admin, productosController.crearProducto);
router.post('/crear', multerProductos.any(), productValidator, productosController.guardarProducto);
router.get ('/:id/editar', userMiddleware.admin, productosController.editarProducto);
router.put ('/:id/detalle', multerProductos.any(), productValidator, productosController.modificacion);
router.delete ('/:id/editar', productosController.eliminarProducto);
router.get ('/conoceme', indexController.nosotrosMC);

module.exports = router;