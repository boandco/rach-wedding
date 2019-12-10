var express = require("express");
var app = express();

var settings = {
	names: 'Rachel Lin & Alex Johnstone',
	date: 'Saturday, September 5th, 2020',
	time: '5:00PM — Late'
}

app.set("view engine", "jade");
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render("index", {
		settings: settings
	});
});

var server = app.listen(5000, function() {
	console.log('Node server is running..');
});