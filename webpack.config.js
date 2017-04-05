var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var VENDOR_LIBS = ["react", "react-dom"];
 

const config = {

    entry: {
        bundle: path.join(__dirname, 'src', 'index.js'),
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        //resolve-url-loader may be chained before sass-loader if necessary
                        use: ['css-loader', 'sass-loader']
                    })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })

    ]
}

module.exports = config;