const db = require('../../database/models');
const Product = require('../../database/models/Product');
const Sequelize = require('sequelize');

let carritoController = {
    carrito: function(req, res) {
        db.Product.findAll({
            limit: 4,
            order: Sequelize.literal('rand()') 
        })
        .then((recomendacion) => {
            res.render('products/carrito', {recomendacion});
        })
        .catch(function(error){
            console.log(error);
        })
    }
}

module.exports = carritoController;