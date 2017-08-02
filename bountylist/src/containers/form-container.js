import React from "react";
import autoBind from "react-autobind";
import FormComponent from "../components/form";

import { connect } from "react-redux";
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
                <FormComponent state={this.state} handleClick={this.props.addData} handleChange={this.change} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(FormContainer);