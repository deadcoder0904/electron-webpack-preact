const path = require("path");
const merge = require("webpack-merge");

const base = require("./webpack.base.config");
const buildPath = path.resolve(__dirname, "./dist");

const main = merge(base, {
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: buildPath
  },
  node: {
    __dirname: false,
    __filename: false
  },
  target: "electron-main"
});

module.exports = main;
