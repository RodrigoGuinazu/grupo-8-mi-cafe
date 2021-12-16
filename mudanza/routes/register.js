let express = require('express');
let registerController = require('../controllers/registerController');

let router = express.Router();
router.get ('', registerController.register);

module.exports = router;