import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import DJCont from "./containers/dj-container.js";

class App extends React.Component {
    render () {
        return (
            <DJCont />
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));