import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css';

import Layout from './views/layout';
//import rocky from './static/biz/rocky';
//alias 方式导入
import rocky from '@static/biz/rocky';


ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Layout} />
        </Switch>
    </BrowserRouter>
), document.getElementById("root"));