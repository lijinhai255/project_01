//5.2 引入http协议
var http =require("http");

module.exports = function(app){
    http.createServer(app)
		//监听端口号
		.listen(3010,()=>console.log('http server start at 3010'))
}