module.exports = function(app, express) {
	app.get('/', function(req, res) {
	  console.log('server get request****');
  });
}