'use strict';

let path    = require('path');
let webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
   index: './app/index',
   vendor: ['angular']
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      }
    ]
  }
};
