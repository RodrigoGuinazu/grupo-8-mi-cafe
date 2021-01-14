let express = require('express');
let productosController = require('../controllers/productosController');
const path = require('path');

// Middleware de Multer Productos
let multerProductosMW = require('../middlewares/multerProductosMW'); 
//app.use(multerProductosMW);

/*let multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
  })
   
  var upload = multer({ storage: storage })
*/
let router = express.Router();
router.get ('/detalle', productosController.detalleProducto);
router.get ('/listado', productosController.listadoProducto);
router.get ('/:id/detalle', productosController.detalleProducto);
router.get ('/listado/cafes', productosController.listadoCafes);
router.get ('/listado/cafeteras', productosController.listadoCafeteras);
router.get ('/listado/accesorios', productosController.listadoAccesorios);
router.get ('/crear', productosController.crearProducto);
router.post('/crear',multerProductosMW, productosController.guardarProducto);
router.get ('/:id/editar', productosController.editarProducto);
router.put ('/:id', multerProductosMW, productosController.modificacion);
router.delete ('/:id/editar', productosController.eliminarProducto);


module.exports = router;