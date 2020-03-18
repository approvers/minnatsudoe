import config from "./webpack.config";
import * as WebpackMerge from "webpack-merge";

module.exports = WebpackMerge(config, {
  mode: "development",
  devtool: "source-map"
});
