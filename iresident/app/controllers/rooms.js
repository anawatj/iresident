var express = require("express");
var rooms = express.Router();

rooms.get('/',function  (req,res) {

		res.send('This is room pages');
	
});
module.exports=rooms;
