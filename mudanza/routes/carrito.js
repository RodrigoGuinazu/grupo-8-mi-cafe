let express = require('express');
let carritoController = require('../controllers/carritoController');

let router = express.Router();
router.get ('/lleno', carritoController.carritoLleno);
router.get ('/vacio', carritoController.carritoVacio);

module.exports = router;