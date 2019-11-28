var express = require("express");
var app = express();

app.set("view engine", "jade");
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render("index");
});

var server = app.listen(5000, function() {
	console.log('Node server is running..');
});