import React from "react";
import { Row } from "react-bootstrap";

import ItemList from "../components/item-list";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

class TItems extends React.Component {
    edit() {
        alert("got em");
    }
    render() {
        return (
            <Row>
                <ItemList gState={this.props.items} handleDel={this.props.delItem} handleEdit={this.edit}/>
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