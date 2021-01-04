const fs = require('fs');
const path = require('path');

let products = fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), {encoding: 'utf-8'});
products = JSON.parse(products);

let productosController = {
    detalleProducto: function(req, res) {
        res.render('products/detalle-producto', { productos });
    },
    listadoProducto: function(req, res) {
        let cafes = productos.filter(function (producto) {
            return producto.categoria == "cafe"
        })

        let cafeteras = productos.filter(function (producto) {
            return producto.categoria == "cafetera"
        })

        let accesorios = productos.filter(function (producto) {
            return producto.categoria == "accesorio"
        })

        res.render('products/listado-productos', { cafes, cafeteras, accesorios });
    },
    crearProducto: function(req, res) {
        res.render('products/crear-producto');
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

//res.render('products/listado-productos', { productos });