let carritoController = {
    carritoLleno: function(req, res) {
        res.render('carrito-lleno');
    },
    carritoVacio: function(req, res) {
        res.render('carrito-vacio');
    }
}

module.exports = carritoController;