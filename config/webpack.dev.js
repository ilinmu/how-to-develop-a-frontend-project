const path = require("path");
const { merge } = require('webpack-merge');

const commonWebpack = require('./webpack.common.js');

module.exports = merge(commonWebpack, {
  mode: 'development',
  plugins: [],
  stats: 'errors-only',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
  }
})