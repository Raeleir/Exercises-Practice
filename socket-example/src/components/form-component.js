import React from "react";


class Form extends React.Component {
    render() {
        return (
            <div>
                <input value={this.props.input.user} placeholder="user" onChange={(event) => {
                    this.props.handleChange("user", event);
                }} />
                <textarea value={this.props.input.msg} placeholder="msg" onChange={(event) => {
                    this.props.handleChange("msg", event);
                }} >
                </textarea>
                <button onClick={() => {
                    this.props.handleClick(//code)
                }} >Send</button>
            </div>
        )
    }
}

export default Form;