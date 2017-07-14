import React from "react";
import { Grid, Row, Jumbotron } from "react-bootstrap";

class Header extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Jumbotron>
                        <h1>Make A Meme</h1>
                    </Jumbotron>
                </Row>
            </Grid>
        )
    }
}

export default Header;