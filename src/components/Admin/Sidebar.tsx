import React, { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components

// reactstrap components
import { Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col, } from "reactstrap"; 

function Sidebar () {

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        <Nav navbar>
          <NavItem>
            <NavLink href="#dashboard" activeClassName="active" >
              <i className="ni ni-tv-2 text-primary" />
              Dashboard
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
