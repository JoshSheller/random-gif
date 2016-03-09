var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/giphy');

require('./config/routes.js')(app, express);
app.use('public');

// start listening to requests on port 8080
var port = Number(process.env.PORT || 8080);
app.listen(port, function () {
  console.log(`server listening on port ${port}`);
});

module.exports = app;