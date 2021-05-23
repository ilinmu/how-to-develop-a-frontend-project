const { merge } = require('webpack-merge');
const ProgressBarPlugin = require("progress-bar-webpack-plugin"); // 打包进度条美化
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const chalk = require("chalk");

const commonWebpack = require('./webpack.common.js');

module.exports = merge(commonWebpack, {
  mode: 'production',
  devtool: 'source-map',
  // 优化
  optimization: {
    usedExports: true,
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new CssMinimizerPlugin()
    ],
  },
  plugins: [
    new ProgressBarPlugin({
      format:
        `${chalk.green.bold('build[:bar]')} ` +
        chalk.green.bold(':percent') +
        ' (:elapsed seconds)',
      clear: false,
      width: 60,
    }),
  ],
  stats: "normal",
})
