import React from "react";
import autoBind from "react-autobind";

import Counter from "../components/counter_component.js";

class CounterContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            style: {
                color: "white"
            }
        }
        autoBind(this);
    }
    up() {
        this.setState({
            counter: this.state.counter + 1,
            style: {
                color: "green"
            }
        })
    }
    down() {
        if(this.state.counter > 0){
        this.setState({
            counter: this.state.counter - 1,
            style: {
                color: "red"
            }
        })
        }
    }
    render () {
        return (
            <Counter styling={this.state.style} counter={this.state.counter} handleUp={this.up} handleDown={this.down}/>
        )
    }
}

export default CounterContainer;