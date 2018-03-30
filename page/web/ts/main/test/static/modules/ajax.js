import React from 'react';
import { message } from 'antd';
import { hashHistory } from 'react-router';
import { observer } from "mobx-react";
const globConf=require('config')
const host= globConf.ajax.host;
const apiList= globConf.ajax.apiList;

class Ajax{
    constructor(){
        this.host=host;
        this.apiList=apiList;
    }
}
export default new Ajax();