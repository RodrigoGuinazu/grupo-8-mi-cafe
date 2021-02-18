const fs = require('fs');
const path = require('path');

let products = fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), {encoding: 'utf-8'});
products = JSON.parse(products);

let carritoController = {
    carritoLleno: function(req, res) {
        let recomendacion = []

        let randomNum = function() {
            const numeroRandom = products[Math.floor(Math.random() * products.length)];
            if (recomendacion.includes(numeroRandom)) {
                randomNum()
            } else {
                recomendacion.push(numeroRandom);
            }
        }

        while(recomendacion.length < 4){
            randomNum()
        }

        res.render('products/carrito-lleno', {recomendacion});
    },
    carritoVacio: function(req, res) {
        res.render('products/carrito-vacio');
    }
}

module.exports = carritoController;