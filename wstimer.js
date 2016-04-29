var express = require('express');
// var cookie-parser = require('cookie-parser');
var app = express();

//app.use(express.cookieParser());
//app.use(express.session({secret: 12345}));

/*
var requestTime = function (req, res, next) {
   var today = Date.now();
   var mm = today.getMonth();
   var dd = today.getDate();
   var yyyy = today.getFullYear();

   req.requestTime = mm + '/' + dd + '/' + yyyy;
   next();
};
*/

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

// Default Endpoint
app.get('/', function (req, res) {
  var responseText = 'Hello World! ';
  responseText += 'Requested at: ' + req.requestTime;
  res.send(responseText);
});

// Start Endpoint
app.get('/start', function (req, res) {
  var responseText = 'Start the timer!';
  res.send(responseText);
});

// Lap Endpoint
app.get('/lap', function (req, res) {
  var responseText = 'Lap Time';
  res.send(responseText);
});


// Stop Endpoint
app.get('/stop', function (req, res) {
  var responseText = 'Stop the Timer';
  res.send(responseText);
});

// Listen on Port 3000 (localhost:3000)
app.listen(3000);
