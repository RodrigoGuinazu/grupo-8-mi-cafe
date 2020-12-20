let productosController = {
    detalleProducto: function(req, res) {
        res.render('products/detalle-producto');
    },
    listadoProducto: function(req, res) {
        res.render('products/listado-productos');
    },
    crearProducto: function(req, res) {
        res.render('products/crear-producto');
    },
}

module.exports = productosController;