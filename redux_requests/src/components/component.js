import React from "react";

class Component extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: `${this.props.color}`}}>
                <button onClick={() => {this.props.handleClick()}}>Color</button>
            </div>
        )
    }
}

export default Component;