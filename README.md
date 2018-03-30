# 有关webpack1.x+typescript中别名的配置
修改webpack配置文件与tsconfig文件；


tsconfig.json:解析之后的相对路径=》baseUrlVal+pathVal
    "baseUrl": ".",
    paths": {
        "@style/*": ["page/web/ts/main/test/components/style/*"],
        "@model/*": ["page/web/ts/main/test/model/*"]
    },  

base.js:以下别名'@style','model'若也同时在tsconifg文件配置,则可以在ts文件使用 import { ZZ } from "yy/zz" 导入,
若无，则只能在js|ts文件中 require('yy/xx')导入
              
    resolve: {
        extensions: ['', '.js', '.jsx', ".ts", ".tsx"],
        alias: 
            'biz-imgs': `${process.cwd()}/page/${platform}/${projectPath}/main/${pageName}/static/imgs`,
            "testFold": `${process.cwd()}/page/${platform}/${projectPath}/main/${pageName}`,
            '@style':`${process.cwd()}/page/${platform}/${projectPath}/main/${pageName}/components/style`,
            '@model':`${process.cwd()}/page/${platform}/${projectPath}/main/${pageName}/model`,
        }
    },