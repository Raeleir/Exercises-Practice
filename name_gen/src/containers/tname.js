import React from "react";

import Name from "../components/name.js";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";


class Tname extends React.Component {
    render() {
        return (
            <div>
                <Name name={[this.props.name1, this.props.name2, this.props.name3]}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tname);