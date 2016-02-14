var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');

var config       = require('./config');
var app          = express();

// enable debug
require('debug').enable(config.debug.debug);
var debug = require('debug')('app:server');

// connect to mongodb
mongoose.connect(process.env.MONGOLAB_URI || config.database.url);
mongoose.connection.on('error', function(err) {
  debug('connection error: ' + err);
  process.exit(1);
});
mongoose.connection.once('open', () => debug('Database connected!'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
if (config.logger.logger) {
  app.use(logger(config.logger.logger));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/'     , require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/tags' , require('./routes/tags'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
