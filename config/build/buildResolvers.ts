import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
  const path = require("path");
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  };
}
