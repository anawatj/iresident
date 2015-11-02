var express = require('express');
var mains = express.Router();

// middleware specific to this router
mains.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
mains.get('/', function(req, res) {
  res.render('mains/index.html',{title:"Main"});
});



module.exports = mains;