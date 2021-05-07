import {  Navbar, NavItem, NavLink, Nav, Container, } from "reactstrap"; 

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
    </Navbar>
  );
}

export default Sidebar;
