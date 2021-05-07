import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Navbar,
  Nav,
  Container
} from "reactstrap";
import UserNavbar from './UserNavbar';

class TopNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              Brand text
            </Link>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UserNavbar />
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default TopNavbar;
