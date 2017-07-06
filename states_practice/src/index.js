import React from "react";
import ReactDOM from "react-dom";

//containers
import CounterContainer from "./containers/counter-cont.js";

class App extends React.Component {
    render() {
        return ( <CounterContainer /> );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));