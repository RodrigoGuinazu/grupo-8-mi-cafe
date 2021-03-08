const db = require('../../database/models');
const Product = require('../../database/models/Product');
const Attribute = require('../../database/models/Attribute');
const Category = require('../../database/models/Category');

let productosController = {
    detalleProducto: function(req, res, next) {
        db.Product.findByPk(req.params.id)
            .then(productDetail => {
                db.Product.findAll({ limit: 4 })
                    .then((recomendacion) => {
                        res.render('products/detalle-producto', {productDetail: productDetail, recomendacion});
                    })
                    .catch(function(error){
                        console.log(error);
                    })
            })
            .catch(function(error){
                console.log(error);
            })
    },
    buscarProducto: function(req, res){
        let busquedaUsuario = req.query.search;

        let resultadoBusqueda = [];

        products.forEach(busqueda => {
            if((busqueda.nombre).includes(busquedaUsuario)){
                resultadoBusqueda.push(busqueda)
            }
        })
        console.log(resultadoBusqueda)
        
        res.render('products/resultadoBusqueda', {resultadoBusqueda});
    },

    listadoProducto: function(req, res) {
        db.Product.findAll()
            .then(productos => {
                res.render('products/listado-productos', {productos: productos});
            })
            .catch(function(error){
                console.log(error);
            })
    },

    listadoCafes: function(req, res) {
        db.Product.findAll({
            where: {
                category_id: 1
            }
        })
            .then(cafes => {
                res.render('products/listado-cafes', {cafes: cafes});
            })
            .catch(function(error){
                console.log(error);
            })
    },

    listadoCafeteras: function(req, res) {
        db.Product.findAll({
            where: {
                category_id: 2
            }
        })
            .then(cafeteras => {
                res.render('products/listado-cafeteras', {cafeteras: cafeteras});
            })
            .catch(function(error){
                console.log(error);
            })
    },
    listadoAccesorios: function(req, res) {
        db.Product.findAll({
            where: {
                category_id: 3
            }
        })
            .then(accesorios  => {
                res.render('products/listado-accesorios', {accesorios : accesorios });
            })
            .catch(function(error){
                console.log(error);
            })
    },

    crearProducto: (req, res) => {
        let attributeRequest = db.Attribute.findAll()
        let categoriesRequest = db.Category.findAll()

        Promise.all([attributeRequest, categoriesRequest])
        .then(([attributes, categories]) => {
            return res.render("products/crear-producto", {attributes, categories})
        })
        .catch(function(error){
			console.log(error);
		})
    },

    guardarProducto: (req, res, next) => {
        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.files[0].filename,
            category_id: req.body.category
        })
        .then(product => {
            product.addAttributes(req.body.attribute)
        })
        .catch(error => {
            console.log(error);
        })
        res.redirect("/productos/listado");
    },

    editarProducto: function(req, res) {
        db.Product.findByPk(req.params.id)
        .then( Product => {
            res.render('products/editar-producto', {Product: Product})
        })
    },

    modificacion: (req, res) => {
        db.Product.update({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.files[0].filename,
            category_id: req.body.category
        },{
            where: ({
                id: req.params.id
            })
        })
        .then(edit => {
            db.Product_attribute.update({
                attribute_id: req.body.attribute,
            },{
                where: ({
                    attribute_product_id: req.params.id
                })
            })
        })
        .catch(error => {
            console.log(error);
        })
        res.redirect('detalle');
    },

    eliminarProducto: function (req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(
            res.redirect("/productos/listado")
        )
    },
}

module.exports = productosController