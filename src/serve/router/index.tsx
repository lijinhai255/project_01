//引入路由
var page = require('./page.tsx');


module.exports = function(app){
    app.use(page)
}