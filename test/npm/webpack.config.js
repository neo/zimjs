const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  plugins: [new HtmlWebpackPlugin()],
  mode: 'development'
};
