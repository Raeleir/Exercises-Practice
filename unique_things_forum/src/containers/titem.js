import React from "react";
import { Row } from "react-bootstrap";

import ItemList from "../components/item-list";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";
import autoBind from "react-autobind";

class TItems extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: []
        }
        autoBind(this);
    }
    handleInput(key, index, event) {
        let inputCopy = [...this.state.inputs];
        inputCopy[index][key] = event.target.value;
        this.setState({
            inputs: inputCopy
        })
    }
    render() {
        return (
            <Row>
                <ItemList inputs={this.state.inputs} gState={this.props.items} handleInput={this.handleInput} handleDel={this.props.delItem} handleEdit={this.props.edit}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TItems);