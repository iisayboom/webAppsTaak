var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

let passport = require('passport');


var app = express();

// start frontend
// Start front-end
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 4200);

var mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE, { useMongoClient: true });

require('./backend/models/User');
require('./backend/models/Post');
require('./backend/models/Thread');
require('./backend/config/passport');

var index = require('./backend/routes/index');
var users = require('./backend/routes/users');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/API/', index);
app.use('/API/users', users);

//elke call naar index brengen
app.all("*", (req, res) => {
    res.status(200).sendFile(`${path.join(__dirname, 'dist')}/index.html`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.render('error');
  
});

module.exports = app;