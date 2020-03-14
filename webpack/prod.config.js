const path = require("path");
const common = require('./common.config');


module.exports = {
  ...common,
  mode: "production",
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
          },
          "postcss-loader"
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
          "postcss-loader"
        ]
      }
    ]
  }
};
