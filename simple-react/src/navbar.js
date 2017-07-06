import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

class Navibar extends React.Component {
    render() {
        let navInput = this.props.links.map((obj) => {
            return (
                    <NavItem href={obj.link}>
                        {obj.label}
                    </NavItem>
            );
        })
        return (
            <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{this.props.brand}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {navInput}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        )
    }
}

export default Navibar;