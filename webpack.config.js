const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    commentOrderButton: './src/commentOrderButton.js',
    popup: './src/popup.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/popup.html',
    filename: 'popup.html',
  }),
  new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  new CopyPlugin({
    patterns: [
      { from: 'public' },
      { from: 'src/background.js' },
      { from: 'src/utils.js' },
      { from: 'src/weightItem.js' },
      { from: 'src/css', to: 'css/[name][ext]' },
    ],
  }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [['@babel/plugin-transform-runtime', { regenerator: true }]],
        },
      },
    }],
  },
};
