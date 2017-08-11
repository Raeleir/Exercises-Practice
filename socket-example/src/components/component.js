import React from "react";


class Test extends React.Component {
    genTests() {
        return this.props.tests.map((item, i) => {
            return (
                <div key={item.msg + i}>
                    {item.user}: {item.msg}
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.genTests()}
            </div>
        )
    }
}

export default Test;