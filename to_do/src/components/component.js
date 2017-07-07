import React from "react";

class Component extends React.Component {
    genTasks() {
        this.toDoList = this.props.tasks.map((task, index) => {
            return (
                <li key={task + index} onClick={() => {this.props.handleClick(index)}}>
                    {task}
                </li>
            )
        })
    }
    render(){
        this.genTasks();
        return (
            <div className="wrapper">
                <input onKeyPress={(event) => {this.props.handleKeyPress(event)}} value={this.props.taskValue} onChange={this.props.handleInput} placeholder="Add Task" />
                <ul>
                   {this.toDoList}
                </ul>
            </div>
        )
    }
}

export default Component;