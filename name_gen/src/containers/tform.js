import React from "react";
import autoBind from "react-autobind";

import Form from "../components/form.js";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

class Tform extends React.Component {
    constructor() {
        super();
        this.state = {
            name1: "",
            name2: "",
            name3: ""
        };
        autoBind(this);
    }
    handleChange(key, e) {
        this.setState({
            [key]: e.target.value
        });
    }
    handleClear() {
        for(let key in this.state){
            this.setState({
                [key]: ""
            })
        }
    }
    render() {
        return (
            <div>
                <Form handleClear={this.handleClear} handleChange={this.handleChange} handleClick={this.props.pickName} containerState={this.state}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tform);