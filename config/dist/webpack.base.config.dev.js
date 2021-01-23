"use strict";

console.log(process.cwd(), "1212");
module.exports = {
  entry: {
    index: './src/web/src/index.tsx'
  },
  module: {
    rules: [{
      test: /\.(j|t)sx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          // 默认值为 false。当有设置时，指定的目录将用来缓存 loader 的执行结果
          cacheDirectory: true
        }
      }
    }, // scss
    {
      test: /\.scss$/,
      use: [// 将 JS 字符串生成为 style 节点
      "style-loader", // 将 CSS 转化成 CommonJS 模块
      "css-loader", // 将 Sass 编译成 CSS
      "sass-loader"]
    }]
  },
  resolve: {
    extensions: ['.tsx', '.js', '.ts']
  }
};