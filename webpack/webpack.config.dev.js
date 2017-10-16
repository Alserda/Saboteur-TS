const { resolve } = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, '../src'),
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:4444',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'index.tsx'
  ],

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, '../dist'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    host: 'localhost',
    port: 4444,

    contentBase: resolve(__dirname, '../dist'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`

    // fallback to root for other urls
    historyApiFallback: true
  },

  module: {
    rules: [
      {
          test: /\.tsx?$/,
          use: 'ts-loader',
      },
    ],
  },

  plugins: [
    // Generate minified HTML page from template with all CSS/JS imports.
    new HtmlWebpackPlugin({
      title: 'Saboteur',
      template: resolve(__dirname, '../public/index.html'),
    }),

    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ],
};
