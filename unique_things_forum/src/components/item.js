import React from "react";
import { Col, Button } from "react-bootstrap";

class Item extends React.Component {
    render() {
        return (
            <Col className="item" md={4}>
                <Button onClick={() => {this.props.handleDel(this.props.index)}} className="delete">X</Button>
                <Button onClick={() => {this.props.handleEdit()}} className="edit">Edit</Button>
                <h2>{this.props.item.title}</h2>
                <div style={{backgroundImage: `url(${this.props.item.url})`}}></div>
                <h4>{this.props.item.desc}</h4>
            </Col>
        )
    }
}

export default Item;