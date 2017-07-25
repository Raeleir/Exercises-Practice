import React from "react";
import Speak from "../components/speak";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

class SpeakContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        };
        autoBind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    render() {
        return (
            <Speak input={this.state.input} handleChange={this.handleChange} handleClick={this.props.convertText} text={this.props.text} />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeakContainer);