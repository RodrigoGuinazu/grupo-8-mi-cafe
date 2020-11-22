const express = require("express");
const app = express();

app.listen(3030, () => {
    console.log('Corriendo en el servidor 3030');
})

app.get('/detalle', function(req, res){
    res.sendFile(__dirname + '/views/detalle-producto.html');
});

app.get('/borrador', function(req, res){
    res.sendFile(__dirname + '/views/borrador.html');
});

app.get('/formulario', function(req, res){
    res.sendFile(__dirname + '/views/formulario-registro.html');
});

app.get('/carrito', function(req, res){
    res.sendFile(__dirname + '/views/carrito.html');
});

app.get('/carrito-lleno', function(req, res){
    res.sendFile(__dirname + '/views/carrito-lleno.html');
});

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/views/login.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname.replace("\src", "") + '/public/' + req.url);
  });