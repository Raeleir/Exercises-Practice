import React from "react";

class Component extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: `${this.props.color}`}}>
                <button onClick={() => {this.props.handleClick()}}>Color</button>
                <h3>{this.props.names.join(" ")}</h3>
            </div>
        )
    }
}

export default Component;