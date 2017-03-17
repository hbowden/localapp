
var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'public/scripts'),
    publicPath: '/public/scripts'
  },
  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      }
    ]
  }
}
