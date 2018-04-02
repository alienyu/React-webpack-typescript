import * as React from "react";
import { timerData } from '@model/data';
import { observer } from "mobx-react";
import { Root } from "@style/style";
const svg = require('biz-imgs/logoSVG.svg')


export interface BProps { text: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
@observer
export class SubPageB extends React.Component<BProps, {}> {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.text != this.props.text;
    }

    render() {
        return (
            <div>
                <h1>pageA's subpageB value is {this.props.text}</h1>
                <span>subpageB Seconds passed: {timerData.secondsPassed} </span>
                <img src={svg} alt="" />
            </div>
        )
    }
}