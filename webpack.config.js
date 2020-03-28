const path = require("path");
const postCSSPlugins = [
  require("postcss-nested"),
  require("postcss-simple-vars"),
  require("autoprefixer"),
  require("postcss-import"),
  require("postcss-nested"),
  require("postcss-mixins"),
  require("postcss-nested-import")
];

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          { loader: "postcss-loader", options: { plugins: postCSSPlugins } }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "transform-object-rest-spread"
            ]
          }
        }
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    before: function(app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.resolve(__dirname, "app"),
    hot: true,
    host: "0.0.0.0"
  }
};
