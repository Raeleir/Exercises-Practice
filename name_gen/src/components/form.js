import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.state} onChange={(e) => {
                            this.props.handleChange("name1", e)}
                        } placeholder="Name" />
                <input type="text" value={this.props.state} onChange={(e) => {
                            this.props.handleChange("name2", e)}
                        } placeholder="Name" />
                <input type="text" value={this.props.state} onChange={(e) => {
                            this.props.handleChange("name3", e)}
                        } placeholder="Name" />
                <button onClick={() => {
                            this.props.handleClick(this.props.name);
                        }}>Pick</button>
            </div>
        )
    }
}

export default Form;