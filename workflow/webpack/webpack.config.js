const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');

module.exports = (env) => {
    return {
        entry: "./src/index.js",
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                }, 
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        plugins: ['lodash'],
                        presets: [
                          ['@babel/preset-env', { targets: "defaults" }]
                        ]
                      }
                    }
                },
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                },
            ]
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/visualizer.html",
                inject: true
            }),
            new LodashModuleReplacementPlugin
        ],
        mode: env.production ? "production" : "development",
    }
};
