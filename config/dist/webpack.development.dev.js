"use strict";

var path = require('path');

var _require = require('webpack-merge'),
    merge = _require.merge;

var baseConfig = require('./webpack.base.config');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');

var devConfig = {
  mode: 'development',
  output: {
    path: path.resolve("./build/web/"),
    filename: "[name].js"
  },
  devServer: {
    hot: true,
    contentBase: path.resolve("./build/web/") // // 代理服务器端域名
    // proxy: {
    //   '/': 'http://localhost:8082',
    // },

  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/web/pubilc/index.html",
    //发布
    filename: "./views/index.html"
  }), new webpack.HotModuleReplacementPlugin()]
};
module.exports = merge(baseConfig, devConfig);