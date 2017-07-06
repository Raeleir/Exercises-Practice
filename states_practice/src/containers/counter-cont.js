import React from "react";

//components
import Counter from "../components/counter.js";

class CounterContainer extends React.Component {
    constructor() {
        super();
        this.state = {counter: 0};
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }
    
    up() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    down() {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    
    render() {
        return ( <Counter handleUp={this.up} handleDown={this.down} counter={this.state.counter}/> );
    }
}

export default CounterContainer;