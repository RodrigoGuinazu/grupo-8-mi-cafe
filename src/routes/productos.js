let express = require('express');
let productosController = require('../controllers/productosController');
const path = require('path');
let multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
  })
   
  var upload = multer({ storage: storage })

let router = express.Router();
router.get ('/detalle', productosController.detalleProducto);
router.get ('/listado', productosController.listadoProducto);
router.get ('/crear', productosController.crearProducto);
router.get ('/:id/editar', productosController.editarProducto);
router.put ('/:id', upload.any(), productosController.modificacion);
//router.delete('/:id/eliminar', productosController.eliminarProducto)

module.exports = router;