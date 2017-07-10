import React from "react";
import autoBind from "react-autobind";

import Button from "../components/buttons.js";

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            blue: 0
        }
        autoBind(this);
    }
    click(color) {
        if(color === "blue"){
            this.setState({
                ...this.state,
                red: this.state.red - 1,
                blue: this.state.blue + 1
            })
        } else {
            this.setState({
                ...this.state,
                red: this.state.red + 1,
                blue: this.state.blue - 1
            })
        }
    }
    render() {
        return ( 
            <div>
                <Button handleClick={this.click} color="red" counter={this.state.red}/>
                <Button handleClick={this.click} color="blue" counter={this.state.blue}/>
            </div> 
        )
    }
}

export default Container;