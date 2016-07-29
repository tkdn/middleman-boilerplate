var webpack = require('webpack');

var webpackConfig =  {
  // SourceMap
  devtool: 'inline-source-map',
  entry: {
    site: './source/assets/js/index.js'
  },
  resolve: {
    root: __dirname + '/source/assets/js/components',
  },
  output: {
    // path: require('path').join(__dirname, './build/assets/js/'),
    path: __dirname + '/.tmp/dist',
    filename: 'assets/js/[name].js'
  },
  // output: {
  //   path: require('path').join(__dirname, 'app/assets/js'),
  //   publicPath: '/assets/js/',
  //   filename: '[name].js'
  // },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader', exclude: /node_modules/ },
    ]
  }
};

module.exports = webpackConfig;
