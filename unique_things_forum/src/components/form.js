import React from "react";
import { Col, Button } from "react-bootstrap";

class Form extends React.Component {
    render() {
        return (
            <Col className="inputs" md={12}>
                <input onChange={(event) => {this.props.handleChange(event, "title")}} value={this.props.strudel.title} placeholder="Title"/>
                <input onChange={(event) => {this.props.handleChange(event, "url")}} value={this.props.strudel.url} placeholder="img URL"/>
                <input onChange={(event) => {this.props.handleChange(event, "desc")}} value={this.props.strudel.desc} placeholder="Description"/>
                <br/>
                <Button onClick={() => {this.props.handleClick(this.props.strudel); this.props.handleClear()}}>Submit</Button>
            </Col>
        )
    }
}

export default Form;