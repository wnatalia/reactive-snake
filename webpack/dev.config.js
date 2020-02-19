const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const GoogleFontsPlugin = require('google-fonts-plugin');


module.exports = {
  entry: path.resolve(__dirname, "..", "src", "index.js"),
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
            "containers": path.resolve(__dirname, "..", "src", "containers"),
            "reducers":  path.resolve(__dirname, "..", "src", "redux", "reducers"),
            "saga": path.resolve(__dirname, "..", "src", "redux", "saga"),
            "types": path.resolve(__dirname, "..", "src", "redux", "types"),
          }
        }
      },
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
                path.resolve(__dirname, "..", "src/styles/variables/_colors.scss"),
                path.resolve(__dirname, "..", "src/styles/variables/_typography.scss")
              ]
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "..", "public", "index.html")
    }),
    new GoogleFontsPlugin({
      "family": "Source Sans Pro",
      "variants": [
        "300",
        "400",
        "600",
      ]
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
