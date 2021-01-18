let express = require('express');
const path = require('path');
let multer = require('multer');
let multerUsuarios = require('../middlewares/multerUsuarios');
let { check, validationResult, body } = require('express-validator');
let usersController = require('../controllers/usersController');
const registrationValidate = require('../middlewares/registrationValidate')


var router = express.Router();
router.get ('/login', usersController.login);
router.post('/login',usersController.processLogin);
router.get ('/register', usersController.register);
router.post('/register', registrationValidate, usersController.processRegister);
router.get ('/:id/editar', usersController.editar);
router.patch ('/:id/editar',multerUsuarios.any(), usersController.modificacion);

module.exports = router;
