const db = require('../../../database/models');
const Product = require('../../../database/models/Product')

let totalCafes = [];
let totalCafeteras = [];
let totalAccesorios = []; /* POR QUE NO PUEDO DECLARARLO EN 0 Y HACER UN FOR ABAJO???!!!?*/

let apiProductosController = {

    listado: function(req, res){
        db.Product.findAll({
            include: "category"
        })
        .then(function(products){
                
            products.forEach(product => {
                if(product.category_id==1) {
                    totalCafes.push(product)
                }
            });

            products.forEach(product => {
                if(product.category_id==2) {
                    totalCafeteras.push(product)
                }
            });

            products.forEach(product => {
                if(product.category_id==3) {
                    totalAccesorios.push(product)
                }
            });

            let product = products.map((product) => {
                return ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    category:{
                        id: product.category_id,
                        name: product.category.category
                    },
                    detail: 'http://localhost:3030/api/products/' + product.id
                })
            })

            let respuesta = {
                meta: {
                    status: 200,
                    count: products.length,
                    countByCategory: {
                            countByCafes: totalCafes.length,
                            countByCafeteras: totalCafeteras.length,
                            countByAccesorios: totalAccesorios.length
                        }
                    },
                data: product
            }

            res.json(respuesta)
        })
        .catch(function(error){
            console.log(error)
        })
    },

    detalle: function(req, res){
        db.Product.findOne({
            where: {	
                id: req.params.id   
			},
            include: 'category'
        })
        .then(function(product){

            let respuesta = {
                meta: {
                    status: 200,
                    name: product.name
                },
                data: {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    image: 'http://localhost:3030/images/products/' + product.image,
                    category: product.category.category,
                }
            }

            res.json(respuesta)
        })
        .catch(function(error){
            console.log(error)
        })
    }

}

module.exports = apiProductosController;


            /*let totalCafe = 0;
            let totalCafeteras = 0;
            let totalAccesorios = 0;


            for(i=0; i <= products.length; i++) {
                if(products.category_id==1) {
                    totalCafe = totalCafe + 1;
                }
            }
            for(i=0; i < products.length; i++) {
                if(products.category_id=2) {
                    totalCafeteras = totalCafeteras + 1
                }
            }
            for(i=0; i < products.length; i++) {
                if(products.category_id=3) {
                    totalAccesorios = totalAccesorios + 1
                }
            }*/