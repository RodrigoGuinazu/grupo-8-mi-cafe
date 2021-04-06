const express = require('express');
const router = express.Router();
const apiUsuariosController = require('../../controllers/api/apiUsuariosController');

router.get('/', apiUsuariosController.listado);
router.get('/:id', apiUsuariosController.detalle);

module.exports = router;
