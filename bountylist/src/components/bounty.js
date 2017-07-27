import React from "react";

class Bounty extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>{this.props.bounty.name}</h2>
                    <h4>{this.props.bounty.location}</h4>
                    <h4>{this.props.bounty.reward}</h4>
                    <h4>{this.props.bounty.wanted}</h4>
                </div>
            </div>
        )
    }
}

export default Bounty;