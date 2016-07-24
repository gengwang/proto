var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/scripts/main.js',
    output: {
        path: path.join(__dirname, '.tmp'),
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'app'),
                query: {
                  presets: 'es2015',
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
