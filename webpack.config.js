const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './server/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.handlebars$/, loader: 'handlebars-loader' },
            { test: /\.jpeg$/, type: 'asset/resource' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '/server/index.html'
        })
    ],
    devServer: {
        proxy: {
            '/api': 'http://127.0.0.1:3000',
        },
        historyApiFallback: true
    }
};
