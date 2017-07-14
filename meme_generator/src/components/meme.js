import React from "react";
import { Col } from "react-bootstrap";

class Meme extends React.Component {
    render() {
        return (
            <Col md={6}>
                <div className="image" style={{backgroundImage: `url(${this.props.url})`}}>
                    <h1 className="top">{this.props.top}</h1>
                    <h1 className="bottom">{this.props.bottom}</h1>
                </div>
            </Col>
        )

    }
}

export default Meme;