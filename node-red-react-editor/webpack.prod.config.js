//perhaps better to create a couple of files, rather than doing different stuff dependent
//on whether dev or prod!

var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        editor: './js/app.js'
    },

    output: {
        
        path: __dirname + "/static",
        publicPath: 'http://178.62.110.78/editor',
        filename: '[name].js'
    },

    "resolve": {
        "alias": {
           "../nodes/b/b":"../nodes/b/b",
        }
    },
    //&name=./img/[name].[ext]
    //annot uglify as this craps up dynamic module loading it seems
    module: {
        loaders: [
                { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
                //{ test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
                { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
                { test: /\.css$/, loaders: ['style', 'css'] },
                { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=/img/[name].[ext]'},
                { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff/[name].[ext]&name=/img/[name].[ext]" },
                { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?limit=8192&name=/img/[name].[ext]" },
               
        ]
    },

    plugins: [new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
    })]
};
