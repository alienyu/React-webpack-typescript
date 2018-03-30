import * as React from "react";

export interface AProps { text: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class subPageA extends React.Component<AProps, {}> {
    render() {
        return (
            <h1>pageB's subpageA value is {this.props.text}</h1>
        )
    }
}