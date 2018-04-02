import * as React from "react";
import { Input } from 'antd';
import { observer } from "mobx-react";
import observableTodoStore from '@model/use';
import {timerData} from '@model/data';
export interface AProps { text: string; }
export interface AState { txt: string; }


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
@observer 
export class SubPageA extends React.Component<AProps, AState> {
    constructor(props: AProps) {
        super(props);
        this.state = {
            txt: ""
        };
    }

    handleChange(e) {
        this.setState({
            txt:e.target.val 
        })
    }E

    handleClick(){
        observableTodoStore.addTodo("read MobX tutorial");
        observableTodoStore.addTodo("try MobX");
        observableTodoStore.todos[0].completed = true;
        observableTodoStore.todos[1].task = "try MobX in own project";
        observableTodoStore.todos[0].task = "grok MobX tutorial";
    }
    render() {
        return (
            <div>
                <h1>this a subPageA. I am pageA's child router</h1>
                <h1>pageA's subpageA value is {this.props.text}</h1>
                <Input type="text" onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleClick.bind(this)}>click</button>
                <span>subpageA Seconds passed: { timerData.secondsPassed } </span>
            </div>

        )
    }
}