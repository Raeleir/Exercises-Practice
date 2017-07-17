import React from "react";
import { Col } from "react-bootstrap";

class Item extends React.Component {
    render() {
        return (
            <Col className="item" md={4}>
                <h2>Title Test</h2>
                <img alt="" src="https://s-media-cache-ak0.pinimg.com/736x/f0/e9/a8/f0e9a8c12dd4f3cda522178bd8061286--funny-face-swap-face-swaps.jpg"/>
                <h4>Description Test</h4>
            </Col>
        )
    }
}

export default Item;