import axios from 'axios';
import {message} from 'antd';
import apiErrors from './rocky-api-errors';

//ajax请求通用配置
let ajaxInstance = axios.create({
    timeout:5*60*1000,
    headers:{'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
});

let apiObj = {};

let getRequestMap = {
    getCompanyInfo:'http://localhost:3000/get1',
}

let postRequestMap = {
    postCompanyInfo:'http://localhost:3000/post1',
}

//返回Promise
function sendAjax(type,url,data,apiName){
    return ajaxInstance({
        method:type,
        url:url,
        data:data
    }).then(response=>{
        return new Promise(function(resolve,reject){
            let returnCode = response.data.returnCode;
            //返回正确结果
            if(returnCode%1000===0){
                resolve(response.data);
            }else{
                //showError；
                //2)优先读后端给的内容; 锅让后端背；商量过  1)读不到后端描述,读前端配置; 
                if(response.data.returnDecription){
                    message.warning(response.data.returnDecription);
                }else if(apiErrors[apiName].returnCode){
                    message.warning(apiErrors[apiName].returnCode);
                }else{
                    message.warning('接口取不到正确数据');
                }
                //reject();
            }
        });
    }).catch(function (error) {
        message.error('接口取不到正确数据');
    });
}


//生成api，function, 
//参数 即请求参数,返回promise

function initApiFuns(){
    let generateApiAction = function(objMap,type){
        for(let k in objMap){
            apiObj[k] = function(params){
                return sendAjax(type,objMap[k],params,k);
            }
        }
    }
    generateApiAction(getRequestMap,'get');
    generateApiAction(postRequestMap,'post');

}

//初始化
initApiFuns();

export default apiObj;

/*
//页面使用参考
import apiObj from './apiPath/apiObj';


只关心输入params和输出response,
自定价错误写在rocky-api-errors.ts

apiObj.getCompanyInfo(params).then(response=>{
    ...biz code here
})

*/

