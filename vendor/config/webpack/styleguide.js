const path = require("path");

module.exports = {
  styleguideDir: "../../../app/assets/styleguide/",
  assetsDir: "../../../app/assets/images/",
  template: path.join(__dirname, "../../../app/templates/styleguide/index.html"),
  serverPort: 4000,
  title: "Styleguide Demo",
  updateWebpackConfig(webpackConfig) {
    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?(.erb)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["react", ["latest", {es2015: {modules: false}}], "stage-0"],
        },
      }
    );

    return webpackConfig;
  },
};
