import React from "react";
import autoBind from "react-autobind";
import FormComponent from "../components/form";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            location: "",
            reward: "",
            wanted: ""
        };
        autoBind(this);
    }
    change(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    render(){
        return (
            <div>
                <FormComponent state={this.state} handleClick={this.props.setData} handleChange={this.change} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);