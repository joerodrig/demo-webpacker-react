// Note: You must restart bin/webpack-watcher for changes to take effect
const path = require("path");
const glob = require("glob");
const extname = require("path-complete-extname");

module.exports = {
  entry: glob.sync(path.resolve(".", "app", "javascript", "packs", "*.js*")).reduce(
    function(map, entry) {
      const basename = path.basename(entry, extname(entry));
      map[basename] = entry;
      return map;
    }, {}
  ),

  output: {filename: "[name].js", path: path.resolve(".", "public", "packs")},

  module: {
    rules: [
      {test: /\.coffee(.erb)?$/, loader: "coffee-loader"},
      {
        test: /\.jsx?(.erb)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["react", ["latest", {es2015: {modules: false}}], "stage-0"],
        },
      },
      {
        test: /.erb$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "rails-erb-loader",
        options: {
          runner: "DISABLE_SPRING=1 ./bin/rails runner",
        },
      },
    ],
  },

  plugins: [],

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve("./app/javascript"),
      path.resolve("node_modules"),
    ],
  },

  resolveLoader: {
    modules: [path.resolve("node_modules")],
  },
};
