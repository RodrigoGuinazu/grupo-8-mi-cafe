let productosController = {
    detalleProducto: function(req, res) {
        res.render('detalle-producto');
    },
    listadoProducto: function(req, res) {
        res.render('listado-productos');
    },
    crearProducto: function(req, res) {
        res.render('crear-producto');
    },
}

module.exports = productosController;