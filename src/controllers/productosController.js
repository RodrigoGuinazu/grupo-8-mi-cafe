const fs = require('fs');
const path = require('path');

let products = fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), {encoding: 'utf-8'});
products = JSON.parse(products);

let productosController = {
    detalleProducto: function(req, res) {
        res.render('products/detalle-producto', { productos });
    },
    listadoProducto: function(req, res) {
        let cafes = products.filter(function (producto) {
            return producto.categoria == "cafe"
        })

        let cafeteras = products.filter(function (producto) {
            return producto.categoria == "cafetera"
        })

        let accesorios = products.filter(function (producto) {
            return producto.categoria == "accesorio"
        })
        
        res.render('products/listado-productos', { cafes, cafeteras, accesorios });
    },

    listadoCafes: function(req, res) {
        let cafes = products.filter(function (producto) {
            return producto.categoria == "cafe"
        })
        res.render("products/listado-cafes", { cafes })
    },

    listadoCafeteras: function(req, res) {
        let cafeteras = products.filter(function (producto) {
            return producto.categoria == "cafetera"
        })
        res.render("products/listado-cafeteras", { cafeteras })
    },

    listadoAccesorios: function(req, res) {
        let accesorios = products.filter(function (producto) {
            return producto.categoria == "accesorio"
        })
        res.render("products/listado-accesorios", { accesorios })
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
                product.nombre = req.body.nombre;
                product.peso = req.body.peso;
                product.descripcion = req.body.descripcion;
                product.precio = req.body.precio;
                product.categoria = req.body.categoria;
                product.imagen = req.files[0].filename;
                console.log(product);
            }
            
        });
        const JSONproduct = JSON.stringify(products);
        fs.writeFileSync(path.join(__dirname, '../data/productos.json'), JSONproduct);
        res.redirect('/')
    },
}

module.exports = productosController
//res.render('products/listado-productos', { productos });