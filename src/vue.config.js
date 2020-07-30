const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
  entry: "./src/main.js",
  publicPath: process.env.NODE_ENV === "production" ? "./dist" : "./",
  devtool: "source-map",
  resolve: {
    alias: {
      "@": resolve("src")
    }
  }
};
