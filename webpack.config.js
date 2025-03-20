const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js', // Entry point for index.html
    preview: './src/preview.js', // Entry point for preview.html
  },
  output: {
    filename: '[name].bundle.js', 
    path: __dirname + '/dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
      filename: 'index.html', 
      chunks: ['index'], 
    }),
    new HtmlWebpackPlugin({
      template: './src/preview.html', 
      filename: 'finished.html', 
      chunks: ['preview'], 
    }),
  ],
};
