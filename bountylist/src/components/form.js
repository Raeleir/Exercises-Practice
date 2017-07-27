import React from "react";

class FormComponent extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <input onChange={(event) => {
                        this.props.handleChange("name", event);
                    }} value={this.props.state.name} placeholder="Name"/>
                    <input onChange={(event) => {
                        this.props.handleChange("location", event);
                    }} value={this.props.state.location} placeholder="Location"/>
                    <input onChange={(event) => {
                        this.props.handleChange("reward", event);
                    }} value={this.props.state.reward} placeholder="Reward"/>
                    <input onChange={(event) => {
                        this.props.handleChange("wanted", event);
                    }} value={this.props.state.wanted} placeholder="Wanted"/>
                </div>
                <button onClick={() => {
                    this.props.handleClick(this.props.state);
                }}>Submit</button>
            </div>
        )
    }
}

export default FormComponent;