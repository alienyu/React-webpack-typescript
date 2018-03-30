import * as React from "react";

export interface BProps { text: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class subPageB extends React.Component<BProps, {}> {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.text != this.props.text;
    }

    render() {
        return (
            <h1>pageB's subpageB value is {this.props.text}</h1>
        )
    }
}