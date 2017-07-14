import React from "react";
import { FormGroup, Button, Col } from "react-bootstrap";

class Forms extends React.Component {
    render() {
        return (
            <Col md={6}>
                <form>
                    <FormGroup>
                        <input onChange={(e) => {this.props.handleChange("url", e)}} value={this.props.meme.url} type="text" placeholder="Image URL"/>
                        <input onChange={(e) => {this.props.handleChange("top", e)}} value={this.props.meme.top} type="text" placeholder="Top Text"/>
                        <input onChange={(e) => {this.props.handleChange("bottom", e)}} value={this.props.meme.bottom} type="text" placeholder="Bottom Text"/>
                        <Button className="create" onClick={() => {
                            this.props.handleClick(this.props.meme);
                        }}>Create</Button>
                    </FormGroup>
                </form>
            </Col>
        )

    }
}

export default Forms;