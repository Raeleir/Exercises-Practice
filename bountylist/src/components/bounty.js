import React from "react";

class Bounty extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>{this.props.bounty.name}</h2>
                    <input value={this.props.input.name} onChange={(event) => {
                        this.props.handleChange("name", event);
                    }}/>

                    <h4>{this.props.bounty.location}</h4>
                    <input value={this.props.input.location} onChange={(event) => {
                        this.props.handleChange("location", event);
                    }}/>

                    <h4>{this.props.bounty.reward}</h4>
                    <input value={this.props.input.reward} onChange={(event) => {
                        this.props.handleChange("reward", event);
                    }}/>

                    <h4>{this.props.bounty.wanted}</h4>
                    <input value={this.props.input.wanted} onChange={(event) => {
                        this.props.handleChange("wanted", event);
                    }}/>

                    <button onClick={() => {
                        this.props.handleDelete(this.props.bounty.id);
                    }}>Delete</button>

                    <button onClick={() => {
                        this.props.handleSave(this.props.bounty.id, this.props.input);
                    }}>Save</button>
                </div>
            </div>
        )
    }
}

export default Bounty;