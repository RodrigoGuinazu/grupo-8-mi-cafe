let express = require('express');
const path = require('path');
let multer = require('multer');
let multerUsuarios = require('../middlewares/multerUsuarios');
let { check, validationResult, body } = require('express-validator');
let usersController = require('../controllers/usersController');
const registrationValidate = require('../middlewares/registrationValidate');
const userMiddleware = require('../middlewares/userMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');


var router = express.Router();
router.get ('/login', userMiddleware, usersController.login);
router.post('/login',usersController.processLogin);
router.get ('/register', userMiddleware, usersController.register);
router.post('/register', registrationValidate, usersController.processRegister);
router.get ('/editar', guestMiddleware, usersController.editar);
router.patch ('/editar',multerUsuarios.any(), usersController.modificacion);

module.exports = router;
