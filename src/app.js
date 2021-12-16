var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");
let authMiddleware = require('./middlewares/authMiddleware.js');
const cors= require("cors");

// REQUIRES
let indexRouter = require('./routes/index');
let productosRouter = require('./routes/productos');
let carritoRouter = require('./routes/carrito');
const apiProducto = require('./routes/api/apiProductos'); // API de productos /api/products
const apiUsuario = require('./routes/api/apiUsuarios'); // API de usuarios /api/users


var usersRouter = require('./routes/users');

var app = express();

const methodOverride = require('method-override');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
  secret: "una frase secreta",
  resave: false,
  saveUninitialized: true
}))
app.use(authMiddleware);

// APP.USE
app.use('/carrito', carritoRouter);
app.use('/productos', productosRouter);
app.use('/usuarios', usersRouter);
app.use('/', indexRouter);
app.use('/api/products', apiProducto); // app.use de la API
app.use('/api/users', apiUsuario); // app.use de la API

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).render('404');
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
