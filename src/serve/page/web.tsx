//将路由的实现 放在该目录下
module.exports = (req,res)=>{
	
		//渲染模板
		res.render('index.html',{
			title:"web页面"
		})
}