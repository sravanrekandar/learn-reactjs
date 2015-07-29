var snippetLoader = 'snippet-loader'; // This custom module is inserted in node_modules
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
module.exports = {
  entry: "./app/main.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.snippet$/, loader: snippetLoader},
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel?optional[]=runtime&stage=0'
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel?optional[]=runtime&stage=0'
      },
      { test: /\.json$/, loader: "json" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
    ]
  },
  externals: {
    "jquery": "jQuery",
    "react": "React",
    "react-router": "ReactRouter",
    "lodash": "lodash",
    "_": "_"
  },
  resolve: {
      extensions: ['', '.js', '.jsx', '.snippet'],
      alias: {
      "syntaxhighlighter-core.css": "node-syntaxhighlighter/lib/styles/shCore.css",
      "syntaxhighlighter-core-default.css": "node-syntaxhighlighter/lib/styles/shCoreDefault.css"
    }
  },
  plugins: [
    new ExtractTextPlugin("public/bundle.css", {allChunks: true})
      /*
      ,
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
    */
  ]
};