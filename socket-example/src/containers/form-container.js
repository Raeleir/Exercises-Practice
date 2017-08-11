import React from "react";
import autoBind from "react-autobind";
import Form from "../components/form-component";


class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            user: "",
            msg: ""
        };
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Form input={this.state} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default FormContainer;