import React from "react";

class NounList extends React.Component {
    genNouns() {
        return this.props.nounThings.map((nounThing, index) => {
            return <Noun handleDelete={this.props.handleDelete} handleSave={this.props.handleSave} key={nounThing.name + index} nounThing={nounThing} />
        })
    }
    render(){
        return (
            <div>
                {this.genNouns()}
            </div>
        )
    }
}

export default NounList;