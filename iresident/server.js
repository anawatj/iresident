var express = require('express');
var path = require('path');
var mains = require("./app/controllers/mains");
var homes = require('./app/controllers/homes');
var rooms = require("./app/controllers/rooms");
var app = express();



app.get('/', function (req, res) {
  res.send('Hello World!');
});

homes.use('/mains',mains);
homes.use('/rooms',rooms);
homes.use("/public", express.static(path.join(__dirname, 'public')));
app.use('/iresident',homes);

app.set('views', __dirname + '/app/views');
app.engine('html', require('ejs').renderFile);
var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});