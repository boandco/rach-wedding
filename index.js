var express = require("express");
var app = express();
var port = 8888;

app.set("view engine", "pug");
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render("index", {});
});

var server = app.listen(port, function() {
	console.log(`Node server is running at http://localhost:${port}`);
});