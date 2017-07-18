import React from "react";
import autoBind from "react-autobind";
import { Row } from "react-bootstrap";

import Form from "../components/form";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

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
    clear(){
        this.setState({
            title: "",
            url: "",
            desc: ""
        })
    }
    render() {
        return (
            <Row>
                <Form handleClear={this.clear} handleClick={this.props.genItem} handleChange={this.change} strudel={this.state}/>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TForm);