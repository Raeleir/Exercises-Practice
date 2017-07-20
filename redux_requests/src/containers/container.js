import React from "react";
import autoBind from "react-autobind";
import Component from "../components/component";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

class Container extends React.Component {
    render() {
        return (
            <Component handleClick={this.props.randomColor} color={this.props.color}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);