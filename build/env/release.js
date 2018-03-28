let path = require('path');
let webpack = require('webpack');
let env = process.env.NODE_ENV;
let merge = require("webpack-merge");
let perConf = require("../config/bizConfig.json");
let platform = perConf.platform;
let projectPath = perConf.projectPath;
let pageName = perConf.pageName || "";
let HtmlWebpackPlugin = require('html-webpack-plugin');
let bizConf = require(process.cwd() + "/page/" + platform + "/" + projectPath + "/webpackConfig/config.js");
let envConf = merge({
    output: {
        path: process.cwd() + '/output/' + platform + "-" + projectPath.replace("/", "-") + "/" + pageName, //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: './'               //模板、样式、脚本、图片等资源对应的server上的路径
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ],
    devtool: env == "local" ? "source-map" : ""
}, bizConf);
let vendorEntry = Object.keys(envConf.entry);

function runtime(page) {
    var entryID = page.split("/").pop(); // web-multiPageBiz/level/test/test
    var fileRoute = process.cwd() + "/page/" + platform + "/" + projectPath + "/main/" + page; //page/web/multiPageBiz/main/level/test
    envConf.entry[entryID] = fileRoute + "/" + page.split("/").pop() + ".ts"; //page/web/multiPageBiz/main/test/test.js
    envConf.plugins.push(new HtmlWebpackPlugin({
        //根据模板插入css/js等生成最终HTML
        filename: entryID + ".html",
        //生成的html存放路径，相对于path
        template: fileRoute + "/" + page.split("/").pop() + '.html',
        favicon: `${process.cwd()}/page/${platform}/${projectPath}/static/imgs/favicon.png`,
        //js插入的位置，true/'head'/'body'/false
        inject: 'body',
        hash: true, //为静态资源生成hash值
        chunks: [entryID, ...vendorEntry], //需要引入的chunk，不配置就会引入所有页面的资源
        minify: {
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        }
    }));
}

function loadConfig(page) {
    module.exports.entry = {};
    var pageList = require(process.cwd() + "/page/" + platform + "/" + projectPath + "/pageList.json")[projectPath];
    if (page) {
        var eachPage = page.split(",");
        for (var i = 0; i < eachPage.length; i++) {
            runtime(eachPage[i]);
        }
    } else {
        for (var j = 0; j < pageList.length; j++) {
            runtime(pageList[j]);
        }
    }
}

loadConfig(pageName);

module.exports = envConf;