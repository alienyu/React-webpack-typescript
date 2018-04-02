import * as React from "react";
import { Route, Switch, Link } from 'react-router-dom'
import { timerData } from '@model/data';
import { observer } from "mobx-react";
import PageRouter from './router';

export interface pageAProps { compiler: string; framework: string; }
export interface pageAState { textA: string, textB: string }
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

@observer
class pageA extends React.Component<pageAProps, pageAState> {
    constructor(props: pageAProps) {
        super(props);
        ["changeTextA"].forEach(m => this[m] = this[m].bind(this));
    }

    changeTextA() {
        this.setState({ textA: "changeTextA" })
    }

    render() {
        console.log("render pageA frame")
        return (
            <div>
                <h1>This is pageA</h1>
                <Link to={{ pathname: '/pageA/subPageA' }}>Go To subPageA</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={{ pathname: '/pageA/subPageB' }}>Go To subPageB</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={{ pathname: '/' }}>Back to Home</Link>
                <span>pageA Seconds passed: {timerData.secondsPassed} </span>
                <PageRouter/>
            </div>
        )
    }
}

export default pageA;