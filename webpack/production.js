var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

const BASE_CONFIG = require('./base');

var config = _.merge({
  cache: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
},BASE_CONFIG);

config.module.loaders.push({
  test: /\.jsx?$/,
  exclude: [/node_modules/,/bower_components/],
  loader: 'react-hot'
});

config.module.loaders.push({
  test: /\.jsx?$/,
  exclude: [/node_modules/,/bower_components/],
  loader: 'babel-loader',
  query:{
    presets: ['react', 'es2015']
  }
});
module.exports = config;
