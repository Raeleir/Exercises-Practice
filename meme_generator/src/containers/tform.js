import React from "react";
import autoBind from "react-autobind";

//get the thing to connect container to the store
import { connect } from "react-redux";

//autobind this to store
import { bindActionCreators } from "redux";

//get all the actions and put them in actionCreators object
import * as actionCreators from "../actions/";

import Forms from "../components/form.js";

class TForm extends React.Component {
    constructor() {
        super();
        this.state = {
            url: "",
            top: "",
            bottom: ""
        };
        autoBind(this);
    }
    handleChange(key, e) {
        this.setState({
            [key]: e.target.value
        });
    }
    render() {
        return (
            <Forms meme={this.state} handleClick={this.props.makeMeme} handleChange={this.handleChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TForm);