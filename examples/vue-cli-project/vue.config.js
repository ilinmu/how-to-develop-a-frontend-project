const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // The base URL your application bundle will be deployed at
  publicPath: process.env.PUBLIC_PATH,
  devServer: {
    // proxy API requests to the API server
    proxy: {
      '/': {
        target: 'http://www.example.com/',
        changeOrigin: true,
        ws: false,
      },
    },
  },
  // eslint-disable-next-line
  configureWebpack: (config) => {
    config.resolve = {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue', '.json', '.scss'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      },
    };
  },
};
