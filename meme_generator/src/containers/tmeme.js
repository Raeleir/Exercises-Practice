import React from "react";

//get the thing to connect container to the store
import { connect } from "react-redux";

//autobind this to store
import { bindActionCreators } from "redux";

//get all the actions and put them in actionCreators object
import * as actionCreators from "../actions/";

import Meme from "../components/meme.js";

class TMeme extends React.Component {
    render() {
        return (
            <Meme url={this.props.url} top={this.props.top} bottom={this.props.bottom}/>
        )
    }
}

//tell redux how to connect state to component via props
const mapStateToProps = (state) => {
    return state;
};

//tell it how to turn actions into functions that can be called via props
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TMeme);