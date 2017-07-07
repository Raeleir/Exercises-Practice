import React from "react";
import autoBind from "react-autobind";
import Component from "../components/component.js";

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            taskValue: "turkey",
            editValue: "fish"
        }
        autoBind(this);
    }
    handleInput(event) {
        this.setState({
            ...this.state,
            taskValue: event.target.value
        })
    }
    handleEditInput(event) {
        this.setState({
            ...this.state,
            editValue: event.target.value
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
    handleEditKeyPress(event, index) {
        if(event.key === 'Enter'){
            let oldTasks = [...this.state.tasks];
            oldTasks.splice(index, 1, this.state.editValue);
            this.setState({
                ...this.state,
                tasks: oldTasks
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
            <Component handleClick={this.handleClick} handleEditInput={this.handleEditInput} handleInput={this.handleInput} taskValue={this.state.taskValue} handleKeyPress={this.handleKeyPress} tasks={this.state.tasks} handleEditKeyPress={this.handleEditKeyPress}/>
        )
    }
}

export default Container;