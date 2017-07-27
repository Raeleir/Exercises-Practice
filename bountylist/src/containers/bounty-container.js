import React from "react";
// import autoBind from "react-autobind";
import Bounty from "../components/bounty";

class BountyContainer extends React.Component {
    render() {
        return (
            <div>
                <Bounty bounty={this.props.bounty} />
            </div>
        )
    }
}

export default BountyContainer;