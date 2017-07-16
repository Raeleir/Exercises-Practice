import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Tform from "./containers/tform.js";
import Tname from "./containers/tname.js";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/";

class App extends React.Component {
    render() {
        return (
            <div>
                <Tform/>
                <Tname/>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));