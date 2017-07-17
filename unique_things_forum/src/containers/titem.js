import React from "react";
import { Row } from "react-bootstrap";

import ItemList from "../components/item-list";

class TItems extends React.Component {
    render() {
        return (
            <Row>
                <ItemList />
            </Row>
        )
    }
}

export default TItems;