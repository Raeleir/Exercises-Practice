import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "react-bootstrap";

import "./index.css";
import TForm from "./containers/tform.js";
import TItem from "./containers/titem.js";
import CHeader from "./header";

class App extends React.Component {
    render() {
        return (
            <div>
                <CHeader/>
                <Grid>
                    <TForm/>
                    <TItem/>
                </Grid>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));