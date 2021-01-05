const fs = require('fs');
const path = require('path');

let products = fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), {encoding: 'utf-8'});
products = JSON.parse(products);

let productosController = {
    detalleProducto: function(req, res, next) {
        const id = req.params.id
        let productDetail = products.find(product => product.id == id);

        res.render('products/detalle-producto', {productDetail: productDetail});
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

    guardarProducto: (req, res) => {
        let productos = {
            "id": id[i]++,
            "nombre": req.body.nombre,
            "peso": req.body.peso,
            "descripcion": req.body.descripcion,
            "precio": req.body.precio,
            "categoria": req.body.categoria,
            "imagen": req.body.imagen
        }

        let archivoProductos = fs.readFileSync('productos.json', {encoding:'utf-8'});
        
        if (archivoProductos == "") {
    		productos = [];
        } else {
            productos = JSON.parse(archivoProductos);
        }

        productos.push(productos);

        productosJSON = JSON.stringify(productos);

        fs.writeFileSync('productos.json', productosJSON);

        res.redirect("products/listado");
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
        fs.writeFileSync(path.join(__dirname, '..','data','productos.json'), JSONproduct);
        res.redirect('/')
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