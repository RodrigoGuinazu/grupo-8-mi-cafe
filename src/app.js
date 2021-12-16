const express = require("express");
const app = express();

app.listen(3030, () => {
    console.log('Corriendo en el servidor 3030');
})

app.get('/detalle', function(req, res){
    res.sendFile(__dirname + '/views/detalle-producto.html');
});

app.get('/navbar', function(req, res){
    res.sendFile(__dirname + '/views/navbar.html');
});

app.get('/formulario', function(req, res){
    res.sendFile(__dirname + '/views/formulario-registro.html');
});

app.get('/carrito-vacio', function(req, res){
    res.sendFile(__dirname + '/views/carrito-vacio.html');
});

app.get('/carrito-lleno', function(req, res){
    res.sendFile(__dirname + '/views/carrito-lleno.html');
});

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/login-wrong-user', function(req, res){
    res.sendFile(__dirname + '/views/login-wrong-user.html');
});

app.get('/login-user-not-found', function(req, res){
    res.sendFile(__dirname + '/views/login-user-not-found.html');
});

app.get('/index', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname.replace("\src", "") + '/public/' + req.url);
  });

/*
app.get('/borrador', function(req, res){
    res.sendFile(__dirname + '/views/borrador.html');
});*/