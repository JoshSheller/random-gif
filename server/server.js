var url = require('url');
var http = require('http');
var request = require('request');

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/search', function(req, response) {
  console.log('successful get request');
  var queryObject = url.parse(req.url,true).query;
  console.log('queryObject', queryObject);
  console.log('queryObject keyword', queryObject['keyword']);

  request('http://api.giphy.com/v1/gifs/search?q=' + queryObject['keyword'] + '&api_key=dc6zaTOxFJmzC', function (error, rs, body) {
    if (!error && rs.statusCode == 200) {
      // console.log('giphy api response', rs.body);
      response.send(rs.body);
    }
  });

  // http.get('http://api.giphy.com/v1/gifs/search?q=' + queryObject['keyword'] + '&api_key=dc6zaTOxFJmzC').
  // on('data', function(rs) {
  //   console.log('response from giphy api', rs.data);
  //   response.json(rs.data);
  // });
  console.log('end of search');
});


app.listen(8888, function() {
  console.log('listening on 8888');
});