import React from "react";

class Component extends React.Component {
    genTasks() {
        return this.props.tasks.map((task, index) => {
            return (
                <li key={task + index}>
                    <p>
                       {task}
                    </p>
                    <span onClick={() => {this.props.handleClick(index)}}>X</span>
                    <input className="edit" placeholder="Edit" 
                        onKeyPress={(event) => {this.props.handleEditKeyPress(event, index)}} 
                        value={this.props.editValue} 
                        onChange={this.props.handleEditInput} />
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