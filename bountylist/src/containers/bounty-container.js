import React from "react";
import autoBind from "react-autobind";
import Bounty from "../components/bounty";

class BountyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.bounty
        };
        autoBind(this);
    }
    change(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Bounty input={this.state} handleChange={this.change} bounty={this.props.bounty} handleDelete={this.props.handleDelete} handleSave={this.props.handleSave} />
            </div>
        )
    }
}

export default BountyContainer;