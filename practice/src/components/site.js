import React from "react";
import { Col } from "react-bootstrap";

class Site extends React.Component {
    render() {
        return (
            <Col xs={12} md={4} onClick={() => {this.props.handleClick(this.props.desc)}}>
               <div className="site-circle" style={{backgroundImage: `url(${this.props.image})`}}>
                <h1 className="site-name">{this.props.name}</h1>
                </div>
            </Col>
        )
    }
}

export default Site;

