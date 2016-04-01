var webpack = require('webpack');
var path = require('path');
module.exports = {
  //插件项
  plugins:[
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],
  //入口
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
  //出口
  output:{
    path:path.join(__dirname, 'dist'),
    filename:'bundle.js',
    publicPath:'/static/',
  },
  //模块加载配置
  module:{
      loaders: [{
          test: /\.js$/,
          loaders: [ 'babel?presets[]=react&presets[]=es2015' ],
          exclude: /node_modules/,
          include: __dirname
      }]
  },
  //其他解决方案
  // resolve:{
  //     root:'',    //绝对路径
  //     extensions:['', '.js', '.json'],
  //     alias:{
  //         AppStore:'js/store/AppStore.js',
  //         ActionType:'js/actions/ActionType.js',
  //         AppAction:'js/actions/AppAction.js',
  //     }
  // }
}