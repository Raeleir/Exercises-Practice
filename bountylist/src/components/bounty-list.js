import React from "react";
import BountyContainer from "../containers/bounty-container";

class BountyList extends React.Component {
    genBounties() {
        return this.props.bounties.map((bounty, index) => {
            return <BountyContainer key={bounty.name + index} bounty={bounty} />
        })
    }
    render(){
        return (
            <div>
                {this.genBounties()}
            </div>
        )
    }
}

export default BountyList;