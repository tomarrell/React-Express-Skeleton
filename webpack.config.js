const path = require('path');
var webpack = require('webpack');

module.exports = {

  // Entry point for Webpack
  entry: './src/index.js',

  // Output build directory
  output: {
    path: path.join(__dirname, ''),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        // Load css files as local modules to JS
        test: /\.css$/,
        loader: 'css-loader?modules&localIdentName=[local]--[hash:base64:5]',
      },
      {
        // Run Babel transpiler on all .JS and .JSX files
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          // Use 'latest' Babel preset. Also compile inline JSX
          presets: ['latest', 'react'],
        },
      },
    ],
  },
  
  devServer: {
    hot: true,
    inline: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

};
