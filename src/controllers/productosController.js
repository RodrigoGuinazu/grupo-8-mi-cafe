const fs = require('fs');
const path = require('path');
const db = require('../../database/models')
const { validationResult } = require("express-validator");

let products = fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), {encoding: 'utf-8'});
products = JSON.parse(products);

let productosController = {
    detalleProducto: function(req, res, next) {
        db.Product.findByPk(req.params.id)
            .then(productDetail => {
                res.render('products/detalle-producto', {productDetail: productDetail});
            })
            .catch(function(error){
                console.log(error);
            })
        /*db.Product.findAll({ limit: 5 })
            .then((recomendacion) => {
                res.render('products/detalle-producto', {recomendacion});
            })
            .catch(function(error){
                console.log(error);
            })*/
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
            .then(producto => {
                res.render('products/listado-productos', {producto: producto});
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
        res.render("products/crear-producto");
    },

    guardarProducto: (req, res, next) => {   
        let arrayId = [];

        arrayId = products.map(function(obj) {
            return obj.id
        })

        let mayorId = arrayId.reduce((a, b) => {
            if(a > b) {
                return a
            } else {
                return b
            }
        })

        let nuevoId = mayorId+1;

        let producto = {
            id: nuevoId,
            nombre: req.body.nombre,
            peso: req.body.peso,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            categoria: req.body.categoria,
            imagen: req.files[0].filename,
        }
        products.push(producto);

        const JSONnewProduct = JSON.stringify(products)

        fs.writeFileSync(path.join(__dirname, '../data/productos.json'), JSONnewProduct);

        res.redirect("/productos/listado");
    },

    editarProducto: function(req, res) {
        const id = req.params.id
        let productToEdit = products.find(product => product.id == id);

        res.render('products/editar-producto', {productToEdit: productToEdit});
    },

    modificacion: (req, res) => {
        products.forEach(product => {
            if(req.params.id == product.id){
                product.nombre = req.body.nombre
                product.peso = req.body.peso
                product.descripcion = req.body.descripcion
                product.precio = req.body.precio
                product.categoria = req.body.categoria
                if (req.files[0] != undefined){
                    product.imagen = req.files[0].filename
                }
            }
            
            
        });
        const JSONproduct = JSON.stringify(products);
        fs.writeFileSync(path.join(__dirname, '..','data','productos.json'), JSONproduct);
        res.redirect('detalle')
    },

    eliminarProducto: function (req, res) {
        // Almacena en una variable el id de producto ingresado en url
        const idProducto = req.params.id
        // Recorre el JSON y retorna los que cumplen con la condicion almacenandolo en products
        let productsFilter = products.filter(function(product) {
            return product.id != idProducto
        })
        // Sobreescribo en products.json la variable products fitlrando el id de URL
        fs.writeFileSync(path.join(__dirname, '..','data','productos.json'), JSON.stringify(productsFilter))
        // Redirecciona a la pagina que quieras
        res.redirect("/productos/listado") // siempre redirecciono la ruta que quiero que muestre
    },
}

module.exports = productosController
//res.render('products/listado-productos', { productos });