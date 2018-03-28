let webpack = require('webpack');
let merge = require("webpack-merge");
let baseConf = require(process.cwd() + "/build/env/base.js");
let env = process.env.NODE_ENV;
let perConf = require(process.cwd() + "/build/config/bizConfig.json");
let platform = perConf.platform;
let projectPath = perConf.projectPath;
let pageName = perConf.pageName;
module.exports = merge(baseConf, {
    entry: {
        'react-vendor': ['react','react-dom','jquery','antd']
    },
    resolve: {
        alias: {
            "common": `${process.cwd()}/page/${platform}/${projectPath}/main/${pageName}/static/module/common.js`
        }
    },
    output: {
        publicPath: env == "local" ? "./" : "./"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['react-vendor'],
            minChunks: Infinity
        }),

        new webpack.ProvidePlugin({
            'common': 'common'
        })
    ]
});