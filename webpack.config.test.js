const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    kusa: './test/kusa.js',
    tue: './test/tue.js',
    makimono: './test/makimono.js',
    tubo: './test/tubo.js',
    udewa: './test/udewa.js',
    tuePlus: './test/tuePlus.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'test'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js'
    }
  },
  performance: {
    maxEntrypointSize: 500_000,
    maxAssetSize: 500_000,
  },
};
