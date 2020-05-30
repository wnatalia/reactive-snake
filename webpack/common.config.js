const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
  entry: path.resolve(__dirname, "..", "src", "index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        include: path.resolve(__dirname, "..", "src"),
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
        resolve: {
          alias: {
            "actions":  path.resolve(__dirname, "..", "src", "redux", "actions"),
            "components": path.resolve(__dirname, "..", "src", "components"),
            "constants": path.resolve(__dirname, "..", "src", "constants"),
            "containers": path.resolve(__dirname, "..", "src", "containers"),
            "helpers": path.resolve(__dirname, "..", "src", "redux", "helpers"),
            "reducers":  path.resolve(__dirname, "..", "src", "redux", "reducers"),
            "saga": path.resolve(__dirname, "..", "src", "redux", "saga"),
            "types": path.resolve(__dirname, "..", "src", "redux", "types"),
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "..", "public", "index.html")
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "..", "dist"),
    publicPath: "/"
  }
};
