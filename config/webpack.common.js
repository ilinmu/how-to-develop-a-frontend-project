const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 输入
  entry: '/src/index.js',
  // 输出
  output: {
    // 输出路径
    path: path.resolve(__dirname, '../dist'),
    // 资源输出路径及名称
    assetModuleFilename: 'assets/[hash][ext][query]',
    // 是否清理输出
    clean: true,
  },
  devServer: {},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            }
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      // asset/resource 替代了 file-loader, url-loader, raw-loader
      // asset/resource file-loader
      // asset/inline url-loader
      // asset/source raw-loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb
          }
        },
        // generator: {
        //   filename: 'static/[hash][ext][query]'
        // }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        type: 'asset/resource'
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
