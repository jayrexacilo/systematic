import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import UserNavbar from '../../components/Admin/UserNavbar';

function Sidebar () {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const toggleCollapse =  () => {
    setCollapseOpen(!collapseOpen);
  };

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      {/* Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleCollapse}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Nav className="align-items-center d-md-none">
        <UserNavbar />
      </Nav>

      <Collapse navbar isOpen={collapseOpen}>
        <div className="navbar-collapse-header d-md-none">
          <Row>
            <Col className="collapse-close" xs="12">
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleCollapse}
              >
                <span />
                <span />
              </button>
            </Col>
          </Row>
        </div>
        <Nav navbar>
          <Container fluid>
            <Nav navbar>
              <NavItem>
                <NavLink href="#dashboard" activeClassName="active" >
                  <i className="fas fa-tasks text-success"></i>
                  Today
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#dashboard" activeClassName="active" >
                  <i className="fas fa-calendar-alt text-orange"></i>
                  Calendar
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#dashboard" activeClassName="active" >
                  <i className="fas fa-check-double text-primary"></i>
                  Notes
                </NavLink>
              </NavItem>
              <hr className="my-3" />
              {/* Heading */}
              <h6 className="navbar-heading text-muted text-center">Projects</h6>
              <NavItem>
                <NavLink href="#dashboard" activeClassName="active" >
                  <i className="fas fa-plus text-muted ml-3"></i>
                  New Project
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#dashboard" activeClassName="active" >
                  <i className="fas fa-trash-alt text-danger"></i>
                  Archives
                </NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Sidebar;
