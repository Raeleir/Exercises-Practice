import React from "react";
import autoBind from "react-autobind";
import Component from "../components/component.js";

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            taskValue: ""
        }
        autoBind(this);
    }
    handleInput(event) {
        this.setState({
            ...this.state,
            taskValue: event.target.value
        })
    }
    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                tasks: [...this.state.tasks, this.state.taskValue],
                taskValue: ""
            })
        }
    }
    handleClick(index) {
        let oldTasks = [...this.state.tasks];
        oldTasks.splice(index, 1);
        this.setState({
            ...this.state,
            tasks: oldTasks
        })
    }
    render(){
        return (
            <Component handleClick={this.handleClick} handleInput={this.handleInput} taskValue={this.state.taskValue} handleKeyPress={this.handleKeyPress} tasks={this.state.tasks} />
        )
    }
}

export default Container;