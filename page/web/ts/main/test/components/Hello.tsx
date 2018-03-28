import * as React from "react";
import { A } from "./a";
import { B } from "./b";

export interface HelloProps { compiler: string; framework: string; }

export interface HelloState { textA: string, textB: string }
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            textA: "textA",
            textB: "textB"
        };
        ["changeTextA"].forEach(m => this[m] = this[m].bind(this));
    }

    changeTextA() {
        this.setState({textA: "changeTextA"})
    }

    render() {
        console.log("render hello")
        return (
            <div>
                <h1 onClick={this.changeTextA}>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <A text={this.state.textA} />
                <B text={this.state.textB} />
            </div>
        )
    }
}