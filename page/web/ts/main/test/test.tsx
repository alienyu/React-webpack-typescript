import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import App from './views/app';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path='/' component={App} />
        </Switch>
    </BrowserRouter>
), document.getElementById("root"));