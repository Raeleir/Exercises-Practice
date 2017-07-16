import React from "react";

class Name extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name[Math.floor(Math.random()*3)]}</h1>
            </div>
        )
    }
}

export default Name;