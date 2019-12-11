const path = require('path')
const webpack = require('webpack') //启用热更新 的第2步
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: path.join(__dirname, './src/main.js'), // 入口，表示，要使用 webpack 打包哪个文件
  output: { // 输出文件相关的配置
    path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
    filename: 'bundle.js' // 这是指定 输出的文件的名称
  },
  mode: 'development',
  devServer: {
    //  --open --port 3000 --contentBase src --hot
    open: true, // 自动打开浏览器
    port: 3000, // 设置启动时候的运行端口
    contentBase: 'src', // 指定托管的根目录
    hot: true // 启用热更新 的 第1步
  },
  plugins: [ // 配置插件的节点
    new webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
    new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
      template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
      filename: 'index.html' // 指定生成的页面的名称
    }),
    new VueLoaderPlugin()
  ],
  module: { // 这个节点，用于配置 所有 第三方模块 加载器 
    rules: [ // 所有第三方模块的 匹配规则
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, //  配置处理 .css 文件的第三方loader 规则
      // {
      //   test: /\.less$/,
      //   use: ['style-loader', 'css-loader', 'less-loader']
      // }, //配置处理 .less 文件的第三方 loader 规则
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // }, // 配置处理 .scss 文件的 第三方 loader 规则
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'
      }, // 处理 图片路径的 loader
      // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader'
      }, // 处理 字体文件的 loader 
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, // 配置 Babel 来转换高级的ES语法
      //.vue
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ],
  },
  resolve: {
    alias: { // 修改 Vue 被导入时候的包的路径
      // "vue$": "vue/dist/vue.js"
    }
  }
}