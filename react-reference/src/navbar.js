import React from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class Navbar extends React.Component {
    render() {
        console.log(this.props.links);
        let links = this.props.links.map((obj) => {
            return (
                <li key={obj.label}>
                    <a href={obj.link}>
                        {obj.label}
                    </a>
                </li>
            );
        })
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{this.props.brand}</a>
                    </div>
                    <ul className="nav navbar-nav">
                        {links}
                    </ul>
                </div>
            </div>
        )
    }
}


export default Navbar;