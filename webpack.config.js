const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src','app'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
  },
};
