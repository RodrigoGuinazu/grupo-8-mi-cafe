let multer = require('multer');
let path = require('path');

function multerProductos(req,res,next){
   var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
  })

  var upload = multer({ storage: storage })
  return upload;
}

  module.exports = multerProductos;