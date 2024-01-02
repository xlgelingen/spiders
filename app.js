require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api.js');
var nunjucks = require('nunjucks');
const cors = require('./middlewares/cors.js');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'tpl');
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});

// app.use((req, res, next) => {
//   res.setHeader('Content-Security-Policy', "connect-src 'self' http://localhost:3000");
//   next();
// });

app.use(cors.allowAll);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// var colorController=require('./controllers/color.js')
// app.post('https://www.jotun.com/color',colorController.getData);

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
