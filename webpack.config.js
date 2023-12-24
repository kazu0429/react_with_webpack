const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("sass-loader");

module.exports = {
    mode: "development", // デプロイ時はproduction
    entry: path.resolve(__dirname, "./src/index.tsx"),
    module: {
        rules:[
            {
                test: /\.(js|mjs|cjs|tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },{
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader", 'postcss-loader'],
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve:{
        extensions:[".js", ".jsx", ".ts", ".tsx"]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    devServer:{
        static:{
            directory: path.relative(__dirname, "dist")
        },
        port:3000
    },
};