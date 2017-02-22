// Created by snov on 21.12.2016.
//
// Webpack configuration for bundling client
//
//=========================================================================

const path = require('path');
const webpack = require('webpack');
const { dist, root } = require('./config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].js',
    path: dist,
    publicPath: '/dist/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([dist], { root })
  ]
};