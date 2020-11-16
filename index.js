const express = require('express');
const app = express();

app.listen(3030, () => console.log('Corriendo en el servidor 3030'));

app.get('/detalle', function(req, res){
    res.sendFile(__dirname + '/src/views/detalle-producto.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/' + req.url);
  });