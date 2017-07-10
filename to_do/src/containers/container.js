import React from "react";
import autoBind from "react-autobind";
import Component from "../components/component.js";

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            taskValue: "",
            editValue: "",
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
    handleEditKeyPress(event, index, task) {
        if(event.key === 'Enter'){
            let oldTasks = [...this.state.tasks];
            oldTasks.splice(index, 1, this.state.editValue);
            this.setState({
                ...this.state,
                tasks: oldTasks,
            })
            document.querySelector(`.${task}`).style.width = "0px";
            document.querySelector(`.${task + index}`).style.display = "inline";
        }
    }
    handleDelClick(index) {
        let oldTasks = [...this.state.tasks];
        oldTasks.splice(index, 1);
        this.setState({
            ...this.state,
            tasks: oldTasks
        })
    }
    handleEditClick(task, index) {
        document.querySelector(`.${task}`).style.width = "90%";
        document.querySelector(`.${task + index}`).style.display = "none";
    }
    render(){
        return (
            <Component pStyle={this.state.pStyle} iStyle={this.state.iStyle} handleEditClick={this.handleEditClick} handleDelClick={this.handleDelClick} handleEditInput={this.handleEditInput} handleInput={this.handleInput} taskValue={this.state.taskValue} handleKeyPress={this.handleKeyPress} tasks={this.state.tasks} handleEditKeyPress={this.handleEditKeyPress}/>
        )
    }
}

export default Container;