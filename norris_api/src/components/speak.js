import React from "react";

class Speak extends React.Component {
    render() {
        return (
            <div>
                <h1>Chuck Norris Joke Generator</h1>

                <div className="input">
                    <input onChange={(event) => {
                        this.props.handleChange(event)
                    }} placeholder="(Optional) First Name" value={this.props.input} />
                    <button onClick={() => {
                        this.props.handleClick(this.props.input);
                    }}>Generate</button>
                </div>

                <div className="output">
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Speak;