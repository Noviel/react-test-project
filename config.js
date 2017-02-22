// Created by snov on 22.02.2017.
//
// Basic application configuration constants

const path = require('path');

module.exports = {
  port: 3000,
  root: __dirname,
  assets: path.resolve(__dirname, './assets'),
  dist: path.resolve(__dirname, './assets/dist')
};