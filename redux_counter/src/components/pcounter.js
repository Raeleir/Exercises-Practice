import React from "react";

class PCounter extends React.Component {
    render() {
        return ( 
            <div>
                <h1>{this.props.counter}</h1>
                <button className="plus" onClick={this.props.handleAdd}>+</button>
                <button className="minus" onClick={this.props.handleSub}>-</button>
            </div>
        )
    }
}

export default PCounter;