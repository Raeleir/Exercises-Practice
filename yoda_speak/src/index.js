import React from "react";
import ReactDOM from "react-dom";
import SpeakContainer from "./containers/tspeak";

class App extends React.Component {
    render() {
        return (
            <SpeakContainer/>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));