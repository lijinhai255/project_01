const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const devConfig = {
    mode:'development',
    output:{
        path:path.resolve("./build/web/"),
        filename:"[name].js"
    },
    devServer: {
        hot: true,
        contentBase:path.resolve("./build/web/")
        // // 代理服务器端域名
        // proxy: {
        //   '/': 'http://localhost:8082',
        // },
      },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/web/pubilc/index.html",
            //发布
            filename:"./views/index.html"

        }),
        new webpack.HotModuleReplacementPlugin(),

    ]
}

module.exports =merge(baseConfig,devConfig) 