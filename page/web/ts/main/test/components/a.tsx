import * as React from "react";

export interface AProps { text: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class A extends React.Component<AProps, {}> {
    render() {
        console.log("render a")

        return (
            <h1>A component's value is {this.props.text}</h1>
        )
    }
}