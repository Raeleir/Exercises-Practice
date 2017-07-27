import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./containers/form-container";
import BountyListContainer from "./containers/bounty-list-container";
import reducers from "./reducers/";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div>
                <FormContainer/>
                <BountyListContainer/>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));