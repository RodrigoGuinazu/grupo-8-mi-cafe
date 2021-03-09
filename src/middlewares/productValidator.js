const {check} = require('express-validator');

module.exports = [
    check('name').isLength({min:5}).withMessage(' El titulo debe tener como minimo 5 caracteres.'),
    check('price').isFloat({gt: 0}).withMessage(' El precio debe ser mayor a 0.'),
    check('description').isLength({min:20}).withMessage(' La descripcion debe tener al menos 20 caracteres.'),
]