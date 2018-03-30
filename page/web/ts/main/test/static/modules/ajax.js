import React from 'react';
import { message } from 'antd';
import { hashHistory } from 'react-router';
import { observer } from "mobx-react";
import globConf from "config";
const host = globConf.ajax.host;
const apiList = globConf.ajax.apiList;

class Ajax {
    constructor() {
        this.host = host;
        this.apiList = apiList;
    }
    // ajax(ops) {
    //     let _this = this;
    //     let config = Object.assign({
    //         // `method` 是创建请求时使用的方法
    //         method: 'POST', // 默认是 get
    //         // `data` 是作为请求主体被发送的数据
    //         // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    //         // 在没有设置 `transformRequest` 时，必须是以下类型之一：
    //         // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    //         // - 浏览器专属：FormData, File, Blob
    //         // - Node 专属： Stream
    //         data: {},
    //         // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    //         // 如果请求花费了超过 `timeout` 的时间，请求将被中断
    //         timeout: 3000,
    //         // `headers` 是即将被发送的自定义请求头
    //         headers: { 'Access-Control-Allow-Origin': '*' },
    //     })
    // }
}
export default new Ajax();