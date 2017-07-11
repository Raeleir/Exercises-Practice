import React from "react";

class Component extends React.Component {
    genTasks() {
        return this.props.tasks.map((task, index) => {
            return (
                <li key={task + index}>
                   <input className={`${task} edit`} 
                        onKeyPress={(event) => {this.props.handleEditKeyPress(event, index, task)}} 
                        value={this.props.editValue} 
                        onChange={this.props.handleEditInput} />
                    <p className={`${task + index} task`} style={this.props.pStyle}>
                       {task}
                    </p>
                    <span onClick={() => {this.props.handleEditClick(task, index)}}>edit</span>
                    <span onClick={() => {this.props.handleDelClick(index)}}>X</span>
                </li>
            )
        })
    }
    render(){
        return (
            <div className="wrapper">
                <input className="input" onKeyPress={(event) => 
                    {this.props.handleKeyPress(event)}} value={this.props.taskValue} onChange={this.props.handleInput} placeholder="Add Task" />
                <ul>
                   {this.genTasks()}
                </ul>
            </div>
        )
    }
}

export default Component;