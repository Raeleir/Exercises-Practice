import React from "react";
import autoBind from "react-autobind";
import { Row } from "react-bootstrap";

import Form from "../components/form";

class TForm extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            url: "",
            desc: ""
        };
        autoBind(this);
    }
    change(event, key){
        this.setState({
            [key]: event.target.value
        })
    }
    render() {
        return (
            <Row>
                <Form handleClick={this.props.genItem} handleChange={this.change} localState={this.state}/>
            </Row>
        )
    }
}

export default TForm;