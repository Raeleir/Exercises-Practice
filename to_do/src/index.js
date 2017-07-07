import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Container from "./containers/container.js";

class App extends React.Component {
    render(){
        return (
            <Container />
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));