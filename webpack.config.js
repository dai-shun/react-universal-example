/**
 * Created by daishun on 2017/4/3.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    devtool: 'source-map',
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
    },
    // externals: {
    //     react: {
    //                 root: 'React',
    //                 commonjs2: 'react',
    //                 commonjs: 'react',
    //                 amd: 'react'
    //             },
    //     lodash: "lodash",
    // },
    entry: path.join(process.cwd(), "src/client.jsx"),
    output: {
        path: path.join(process.cwd(), 'public'),
        publicPath:"",
        filename: 'index.js',
        libraryTarget: "umd"
    },
    plugins: [
        new ExtractTextPlugin("index.css")
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader'
        },
        { test: /\.(png|jpg|jpeg|gif|eot|woff|svg|ttf|woff2)$/, loader: "url-loader?limit=4096" },
        { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader?sourceMap', use: 'css-loader?modules&importLoaders=1&localIdentName=_[local]_[hash:base64:5]' })
    }]
    }
};