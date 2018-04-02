import * as React from "react";
import { Route, Switch ,Redirect} from 'react-router-dom';
import HomePage from './children/home/homePage';
import PageA from './children/pageA/pageA';
import PageB from './children/pageB/pageB';

export default function () {
    //默认跳转 /home
    return (<Switch>
        <Route exact path='/home' component={HomePage} />
        <Route path='/pageA' component={PageA} />
        <Route path='/pageB' component={PageB} />
        <Redirect to='/home' />  
    </Switch>)
}
