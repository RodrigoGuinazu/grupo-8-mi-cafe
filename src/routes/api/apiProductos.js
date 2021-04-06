const express = require("express");
const router = express.Router();
const apiProductosController = require('../../controllers/api/apiProductosController');

router.get('/', apiProductosController.listado);
router.get('/:id', apiProductosController.detalle);

module.exports = router;
