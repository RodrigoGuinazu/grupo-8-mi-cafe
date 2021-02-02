const {check, body} = require('express-validator');

module.exports = [
  body('product-img')
    .custom(function(value, {req}) {
        if (req.files[0].filename != "") {
            return true;
        }
        return false;
    })
    .withMessage('Debes subir una imagen del Producto.'),
  check('nombre').isEmpty().withMessage('Ingresá el nombre del Producto.'),
  check('precio').isEmpty().withMessage('Ingresá el precio del Producto.'),
  check('descripcion').isEmpty().withMessage('Ingresa el detalle del Producto.')
]

