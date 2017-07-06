import React from "react";

class Form extends React.Component {
    genNames() {
        this.nameLi = this.props.names.map((name, index) => {
            return (
                <p key={name + index}>
                    {name}
                </p>
            )
        });
    }
    render() {
        this.genNames();
        return (
            <div>
                <h1>{this.props.brand}</h1>
                <h2>Enter New Name</h2>
                <input onKeyPress={(event) => {this.props.handleKeyPress(event)}} value={this.props.nameValue} onChange={this.props.handleInput} />
                <div className="fish">
                    {this.nameLi}
                </div>
            </div>
        )
    }
}

export default Form;