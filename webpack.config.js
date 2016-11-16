module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        library: true,
        filename: "./build/build.js",
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel",
            exclude: [/node_modules/, /public/]
        },
        { test: /\.js$/,   loader: "eslint-loader", exclude: [/node_modules/, /public/]},
        { test: /\.json$/, loader: "json-loader"}]
    }
};
