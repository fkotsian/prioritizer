var webpack = require('webpack');
var path = require('path');

var OUTPUT_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: [
    'babel-polyfill', 
    APP_DIR + '/app.js'
  ],
  output: {
    path: OUTPUT_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  }
};

module.exports = config;
