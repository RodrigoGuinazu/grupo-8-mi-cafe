const db = require('../../../database/models');
const Product = require('../../../database/models/Product');
const productosController = require('../productosController');



let apiProductosController = {

    listado: function(req, res){
        let totalCafes = [];
        let totalCafeteras = [];
        let totalAccesorios = []; /* POR QUE NO PUEDO DECLARARLO EN 0 Y HACER UN FOR ABAJO???!!!?*/
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
                    price: product.price,
                    detail: 'http://localhost:3030/api/products/' + product.id,
                    link: `http://localhost:3030/productos/${product.id}/detalle`,
                    edit: `http://localhost:3030/productos/${product.id}/editar`
                })
            })

            let respuesta = {
                meta: {
                    status: 200,
                    count: products.length,
                    countByCategory: [
                            {title: "Cafes", count: totalCafes.length, link: "http://localhost:3030/productos/listado/cafes"},
                            {title: "Cafeteras", count: totalCafeteras.length, link: "http://localhost:3030/productos/listado/cafeteras"},
                            {title: "Accesorios", count: totalAccesorios.length, link: "http://localhost:3030/productos/listado/accesorios"}
                        ]
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