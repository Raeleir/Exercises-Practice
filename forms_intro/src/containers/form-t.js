import React from "react";
import autoBind from "react-autobind";

import Form from "../components/form.js";

class FormT extends React.Component {
    constructor() {
        super();
        this.state = {
            names: [],
            nameValue: ""
        };
        autoBind(this);
    };
    handleInput(event) {
        this.setState({
            ...this.state,
            nameValue: event.target.value
        });
    };
    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                names: [...this.state.names, this.state.nameValue],
                nameValue: ""
            });
        };
    };
    handleClick(index) {
        let oldNames = [...this.state.names];
        oldNames.splice(index, 1);
        this.setState({
            ...this.state,
            names: oldNames
        });
    };
    render() {
        return (
            <div>
                <Form handleClick={this.handleClick} handleInput={this.handleInput} nameValue={this.state.nameValue} handleKeyPress={this.handleKeyPress} names={this.state.names} brand="May Cohort"/>
            </div>
        )
    }
}

export default FormT;