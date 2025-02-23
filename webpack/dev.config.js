const common = require('./common.config');
const path = require("path");


module.exports = {
  ...common,
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 3001,
    open: true
  },
  mode: "development",
  module: {
    rules: [
      ...common.module.rules,
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "..", "src"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]"
              },
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "..", "src"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]"
              },
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                path.resolve(__dirname, "..", "src/styles/variables/_breakpoints.scss"),
                path.resolve(__dirname, "..", "src/styles/variables/_colors.scss"),
                path.resolve(__dirname, "..", "src/styles/variables/_typography.scss")
              ]
            },
          },
        ]
      }
    ]
  }
};
