var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

var webpackConfig = {
  entry: {
    site: './source/assets/js/index.js'
  },
  resolve: {
    root: __dirname + '/source/assets/js/components',
  },
  output: {
    // path: require('path').join(__dirname, './build/assets/js/'),
    path: __dirname + '/build',
    filename: 'assets/js/[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules|\.tmp|vendor/ },
      { test: /\.json$/, loader: 'json-loader', exclude: /node_modules|\.tmp|vendor/ },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}

module.exports = webpackConfig;
