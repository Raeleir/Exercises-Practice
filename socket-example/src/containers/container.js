import React from "react";
import autoBind from "react-autobind";
import Test from "../components/component";

class TestContainer extends React.Component {
    render() {
        return (
            <div>
                <Test />
            </div>
        )
    }
}

export default TestContainer;