import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PCounter from "../components/pcounter.js";
import * as actionCreators from "../actions";

class TCounter extends React.Component {
    render() {
        return ( <PCounter handleAdd={this.props.add} handleSub={this.props.sub} counter={this.props.counter}/>)
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TCounter);