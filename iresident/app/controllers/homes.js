var express =require("express");
var homes= express.Router();
homes.get('/',function(req,res)
{
	res.send('This Index Page');
});
homes.get("/login",function(req,res)
{
	res.render('homes/login.html');
});
module.exports= homes;
