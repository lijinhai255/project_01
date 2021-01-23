var express = require('express');
// 引入page
var page = require("../page/index.tsx")

var router =new express.Router();

module.exports = router
                    .get("/",page.web)