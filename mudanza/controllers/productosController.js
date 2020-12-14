let productosController = {
    detalleProducto: function(req, res) {
        res.render('detalle-producto');
    },
    listadoProducto: function(req, res) {
        res.render('listado-productos');
    },
}

module.exports = productosController;