import * as React from "react";

export interface BProps { text: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class B extends React.Component<BProps, {}> {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.text != this.props.text;
    }

    render() {
        console.log("render b")

        return (
            <h1>B component's value is {this.props.text}</h1>
        )
    }
}