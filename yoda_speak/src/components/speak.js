import React from "react";

class Speak extends React.Component {
    render() {
        return (
            <div>
                <h1>Yoda Speak</h1>

                <div>
                    <input onChange={(event) => {
                        this.props.handleChange(event)
                    }} value={this.props.input} />
                    <button onClick={() => {
                        this.props.handleClick(this.props.input);
                    }}>Translate</button>
                </div>

                <h3>{this.props.text}</h3>
            </div>
        )
    }
}

export default Speak;