var express = require('express');

var app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/users', function(req, res) {
  res.sendfile(__dirname + '/public/users.html');
});

app.listen(1337);

console.log('listening on port 1337');