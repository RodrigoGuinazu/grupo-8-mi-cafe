let express = require('express');
let loginController = require('../controllers/loginController');

let router = express.Router();
router.get ('', loginController.login)
router.get ('/wrong-user', loginController.wrongUser);
router.get ('/user-not-found', loginController.userNotFound);

module.exports = router;