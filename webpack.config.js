const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        library: 'G2PlotColumn',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        filename: 'g2plot-column.min.js',
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
    externals: {
        "@antv/g2plot": 'G2Plot'
      }
};