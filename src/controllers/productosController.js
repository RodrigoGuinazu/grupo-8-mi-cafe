const fs = require('fs');
const path = require('path');

let productos = fs.readFileSync(path.resolve(__dirname,'../data/productos.json'),{encoding: 'utf8'})
productos = JSON.parse(productos);



module.exports = {
    detalleProducto: function(req, res) {
        res.render('products/detalle-producto', { productos });
    },
    listadoProducto: function(req, res) {
        let cafes = productos.filter(function (producto) {
            return producto.categoria == "cafe"
        })

        let cafeteras = productos.filter(function (producto) {
            return producto.categoria == "cafetera"
        })

        let accesorios = productos.filter(function (producto) {
            return producto.categoria == "accesorio"
        })

        res.render('products/listado-productos', { cafes, cafeteras, accesorios });
    },
    crearProducto: function(req, res) {
        res.render('products/crear-producto');
    },
    editarProducto: function(req, res) {
        res.render('products/editar-producto');
    },
}

//res.render('products/listado-productos', { productos });