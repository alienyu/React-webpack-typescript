import * as React from "react";
import { Route, Switch, Link } from 'react-router-dom'

import { subPageA } from "./children/subPageA/subPageA";
import { subPageB } from "./children/subPageB/subPageB";

export interface pageBProps { compiler: string; framework: string; }

export interface pageBState { textA: string, textB: string }
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
class pageB extends React.Component<pageBProps, pageBState> {
    constructor(props: pageBProps) {
        super(props);
        ["changeTextA"].forEach(m => this[m] = this[m].bind(this));
    }

    changeTextA() {
        this.setState({textA: "changeTextA"})
    }

    render() {
        console.log("render hello")
        return (
            <div>
                <div>This is pageB</div>
                <Link to={{pathname: '/pageB/subPageA'}}>Go To subPageA</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={{pathname: '/pageB/subPageB'}}>Go To subPageB</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={{pathname: '/'}}>Back to Home</Link>

                <Route exact path='/pageB/subPageA' component={subPageA} />
                <Route exact path='/pageB/subPageB' component={subPageB} />
            </div>
        )
    }
}

export default pageB;