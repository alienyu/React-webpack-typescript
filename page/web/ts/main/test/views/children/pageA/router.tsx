import * as React from "react";
import { Route, Switch ,Redirect} from 'react-router-dom';
import { SubPageA } from "./children/subPageA/subPageA";
import { SubPageB } from "./children/subPageB/subPageB";

export default function () {
    //redirect 默认跳转子路由   /pageA/subPageA
    return (<Switch>
        <Route path='/pageA/subPageA' render={(props) => (<SubPageA {...props} text={"frome pageA"} />)} />
        <Route path='/pageA/subPageB' render={(props) => (<SubPageB {...props} text={"frome pageA"} />)} />
        <Redirect to='/pageA/subPageA' />  
    </Switch>)
}


