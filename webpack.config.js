const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const optimization = () => {
    const config = {};

    if (isProd) {
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
        ];
    }

    return config;
};

module.exports = {
    mode: "development",
    entry: './src/index.tsx',
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 3001,
        historyApiFallback: true,
        devMiddleware: {
            publicPath: '/'
        },

        // onAfterSetupMiddleware: function (devServer) {
        // },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[contenthash].js',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        plugins: [new TsconfigPathsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|svg|ico|webp)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    optimization: optimization(),
}
