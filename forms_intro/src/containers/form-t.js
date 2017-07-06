import React from "react";
import autoBind from "react-autobind";

import Form from "../components/form.js";

class FormT extends React.Component {
    constructor() {
        super();
        this.state = {
            names: ["Jordan", "Dakota"],
            nameValue: ""
        };
        autoBind(this);
    };
    input(event) {
        this.setState({
            ...this.state,
            nameValue: event.target.value
        });
    }
    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                names: [...this.state.names, this.state.nameValue],
                nameValue: ""
            });
        }
    }
    render() {
        return (
            <div>
                <Form handleInput={this.input} nameValue={this.state.nameValue} handleKeyPress={this.handleKeyPress} names={this.state.names} brand="May Cohort"/>
            </div>
        )
    }
}

export default FormT;