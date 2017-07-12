import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/";

import "./index.css";
import TCounter from "./containers/tcounter.js";

class App extends React.Component {
    render() {
        return ( <TCounter />)
    }
}

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));