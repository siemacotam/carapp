const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    hot: true,
    open: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
    },
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ],
};