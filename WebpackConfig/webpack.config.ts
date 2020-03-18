import * as path from "path";

import * as webpack from "webpack";
import * as HTMLPlugin from "html-webpack-plugin";
const Minimizer = require("babel-minify-webpack-plugin");

const config: webpack.Configuration = {
  mode: "production",
  entry: path.resolve(process.cwd(), "src/index.tsx"),
  resolve: { extensions: [".js", ".ts", ".tsx"] },
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist")
  },
  optimization: {
    splitChunks: {
      name: "library",
      chunks: "initial"
    },
    minimizer: [new Minimizer()]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.(png|jpg|wasm)$/,
        use: "file-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HTMLPlugin({ template: path.resolve(process.cwd(), "src/index.html") })
  ]
};

export default config;
