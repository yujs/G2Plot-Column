const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './example/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'g2plot-column.min.js'
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'example'),
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'G2Plot Column',
            template: 'example/index.html',
        })
    ]
};