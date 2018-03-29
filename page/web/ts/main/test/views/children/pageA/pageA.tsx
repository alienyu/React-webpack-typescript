import * as React from "react";
import { Route, Switch, Link } from 'react-router-dom'

import { SubPageA } from "./children/subPageA/subPageA";
import { SubPageB } from "./children/subPageB/subPageB";

export interface pageAProps { compiler: string; framework: string; }

export interface pageAState { textA: string, textB: string }
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
class pageA extends React.Component<pageAProps, pageAState> {
    constructor(props: pageAProps) {
        super(props);
        ["changeTextA"].forEach(m => this[m] = this[m].bind(this));
    }

    changeTextA() {
        this.setState({textA: "changeTextA"})
    }

    render() {
        console.log("render pageA frame")
        return (
            <div>
                <div>This is pageA</div>
                <Link to={{pathname: '/pageA/subPageA'}}>Go To subPageA</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={{pathname: '/pageA/subPageB'}}>Go To subPageB</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={{pathname: '/'}}>Back to Home</Link>

                <Route path='/pageA/subPageA' render={(props) => (
                    <SubPageA {...props} text={"frome pageA"} />
                )} />
                <Route path='/pageA/subPageB' render={(props) => (
                    <SubPageB {...props} text={"frome pageA"} />
                )} />
            </div>
        )
    }
}

export default pageA;