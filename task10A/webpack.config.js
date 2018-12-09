const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        'polyfills': './task10A/src/polyfills.ts',
        'app': './task10A/src/main.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'task10A/dist'),
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json'
                        }
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    emitFile: true,
                    name: '[name].[ext]',
                    outputPath: 'assets/'
                }
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'task10A/src/app'),
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'task10A/src/app'),
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            path.resolve(__dirname, 'task10A/src'),
            {}
        ),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'task10A/src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new UglifyJSPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
};
