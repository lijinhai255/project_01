var express = require('express');
var server = require('./server/index.tsx');
var router = require("./router/index.tsx");
//引入中间件
var middleware = require('./middleware/index.tsx');
var app = express();
server(app);
router(app);
middleware(app);
