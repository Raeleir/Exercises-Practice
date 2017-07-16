import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div>
                <input onChange={(e) => {this.props.handleChange("name1", e)}}
                       placeholder="Name" type="text" value={this.props.containerState.name1}/>
                <input onChange={(e) => {this.props.handleChange("name2", e)}}
                       placeholder="Name" type="text" value={this.props.containerState.name2}/>
                <input onChange={(e) => {this.props.handleChange("name3", e)}}
                       placeholder="Name" type="text" value={this.props.containerState.name3}/>
                <button onClick={() => {this.props.handleClick(this.props.containerState); this.props.handleClear()}}>Pick</button>
            </div>
        )
    }
}

export default Form;