var ejs =require("ejs");
var express = require("express");
var path = require("path");
//引入session 
var  session = require('express-session');
//引入请求解析中间件
var bodyParser =require('body-parser');
var ejs =require("ejs");

module.exports = function(app){
    app.set('views',"build/web"); 
    app.engine('.html',ejs.__express);
    //第三步 模版引擎设置为 ejs 
	app.set('view engine' , 'ejs');
	//使用session中间件
	app.use(session({
		secret: 'icketang',
		resave:true,
		saveUninitialized:false,
	}));
    app.use('/build/',express.static(path.join(process.cwd(),'/build/')))
}