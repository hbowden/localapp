
var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin  = require("html-webpack-plugin")

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
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=ra_[name]__[local]' 
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: "./src"
  }
}
