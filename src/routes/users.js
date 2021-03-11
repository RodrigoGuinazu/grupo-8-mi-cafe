let express = require('express');
const path = require('path');
let multer = require('multer');
let multerUsuarios = require('../middlewares/multerUsuarios');
let { check, validationResult, body } = require('express-validator');
let usersController = require('../controllers/usersController');
const registrationValidate = require('../middlewares/registrationValidate');
const userMiddleware = require('../middlewares/userMiddleware');


var router = express.Router();
router.get ('/login', userMiddleware.registered, usersController.login);
router.post('/login',usersController.processLogin);
router.get ('/logout', usersController.logout);
router.get ('/register', userMiddleware.registered, usersController.register);
router.post('/register', registrationValidate, usersController.processRegister);
router.get ('/editar', userMiddleware.guest, usersController.editar);
router.patch ('/editar', usersController.modificacion);
router.get ('/perfil', userMiddleware.guest, usersController.perfil);
router.delete('/eliminar',usersController.delete);
router.get ('/avatar', userMiddleware.guest, usersController.avatar);
router.get ('/direcciones', userMiddleware.guest, usersController.direcciones);
router.get ('/direcciones/crear', userMiddleware.guest, usersController.crearDireccion);
router.get ('/pagos', userMiddleware.guest, usersController.pagos);

module.exports = router;

