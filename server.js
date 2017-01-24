var express = require("express"),
    app = express();
var mapboxgl = require('mapbox-gl');

var port = process.env.PORT || 3000;

//Get Mapbox Credentials
var config = JSON.parse(process.env.VCAP_SERVICES);
var mapboxAccessToken;
config['user-provided'].forEach(function(service) {
    if (service.name == 'Maps-zu') {
    	console.log(service);
        mapboxAccessToken = service.credentials.authToken;
    }
});

app.get('/', function (req, res) {
	app.locals.mapboxAccessToken
	res.render('index', 
		{'mapboxAccessToken' : mapboxAccessToken});
});
 
var server = app.listen(port, function () {
  console.log('Example app started')
});


