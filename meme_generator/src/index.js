import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row } from "react-bootstrap";

//this connects store to app
import { Provider } from "react-redux";

//get the thing that makes the store
import { createStore } from "redux";

//get reducer (to handle state)
import reducers from "./reducers/";

import "./index.css";
import Header from "./components/header.js";
import TForm from "./containers/tform.js";
import TMeme from "./containers/tmeme.js";

//make the store
const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Grid>
                    <Row>
                        <TForm />
                        <TMeme />
                    </Row>
                </Grid>
            </div>
        )

    }
}



ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));