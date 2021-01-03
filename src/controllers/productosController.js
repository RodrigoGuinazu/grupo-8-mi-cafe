const fs = require('fs');
const path = require('path');

let productos = fs.readFileSync(path.resolve(__dirname,'../data/productos.json'),{encoding: 'utf8'})
productos = JSON.parse(productos);



module.exports = {
    detalleProducto: function(req, res) {
        res.render('products/detalle-producto', { productos });
    },
    listadoProducto: function(req, res) {
        res.render('products/listado-productos', { productos });
    },
    crearProducto: function(req, res) {
        res.render('products/crear-producto');
    },
    editarProducto: function(req, res) {
        res.render('products/editar-producto');
    },
}