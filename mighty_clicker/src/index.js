import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Container from "./containers/container.js";

class App extends React.Component {
    render() {
        return ( 
            <div>
                <h1>Red v Blue Button Style!</h1>
                <Container />
            </div> 
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));