import React from "react";
import { Col, Button } from "react-bootstrap";

class Form extends React.Component {
    render() {
        return (
            <Col className="inputs" md={12}>
                <input onChange={(event) => {this.props.handleChange(event, "title")}} value={this.props.localState.title} placeholder="Title"/>
                <input onChange={(event) => {this.props.handleChange(event, "url")}} value={this.props.localState.url} placeholder="img URL"/>
                <input onChange={(event) => {this.props.handleChange(event, "desc")}} value={this.props.localState.desc} placeholder="Description"/>
                <br/>
                <Button>Submit</Button>
            </Col>
        )
    }
}

export default Form;