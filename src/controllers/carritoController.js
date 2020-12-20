let carritoController = {
    carritoLleno: function(req, res) {
        res.render('products/carrito-lleno');
    },
    carritoVacio: function(req, res) {
        res.render('products/carrito-vacio');
    }
}

module.exports = carritoController;