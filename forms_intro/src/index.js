import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import FormT from "./containers/form-t.js";

class App extends React.Component {
    render() {
        return (
            <view>
                <FormT />
            </view>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));