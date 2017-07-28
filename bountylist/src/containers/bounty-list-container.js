import React from "react";
import BountyList from "../components/bounty-list";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

class BountyListContainer extends React.Component {
    componentWillMount() {
        this.props.loadData();
    }
    render(){
        return (
            <div>
                <BountyList bounties={this.props.bounties} handleDelete={this.props.deleteData} handleSave={this.props.updateData} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BountyListContainer);