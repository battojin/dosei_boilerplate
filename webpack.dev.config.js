const { resolve } = require('path')

const config = {
    entry: './client/main.js',
    mode: 'development',
    output: {
        filename: 'js/[name].bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                excludes: /node_modules/
            }
        ]
    }
}

module.exports = config
