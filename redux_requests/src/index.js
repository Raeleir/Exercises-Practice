import React from "react";
import ReactDOM from "react-dom";
import Container from "./containers/container";
import "./index.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index.js";
const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <Container />
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));