let express = require('express');
let carritoController = require('../controllers/carritoController');

let router = express.Router();
router.get ('/', carritoController.carrito);

module.exports = router;