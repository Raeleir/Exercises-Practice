import React from "react";
import { Grid, Row } from "react-bootstrap";

import Site from "../components/site.js";

class SiteContainer extends React.Component {
    alertDesc(desc) {
        alert(`Description: ${desc}`);
    }
    render() {
        let sites = this.props.sites.map((item) =>{
            return <Site key={item.name} handleClick={this.alertDesc} image={item.image} name={item.name} desc={item.desc} />
        });
        return (
            <Grid>
                <Row>
                    {sites}
                </Row>
            </Grid>
        )
    }
}

export default SiteContainer;