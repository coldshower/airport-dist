var express = require('express');
var app = express();
var path = require('path');

app.use(require('./static'));

app.get('/*', function (req, res, next) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(4000, function () {
	console.log('App listening on port', 4000);
});
