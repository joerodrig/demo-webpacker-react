// Note: You must restart bin/webpack-watcher for changes to take effect
const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./shared.js");

module.exports = merge(config, {
  output: {filename: "[name]-[hash].js"},
  plugins: [new webpack.LoaderOptionsPlugin({minimize: true})],
});
