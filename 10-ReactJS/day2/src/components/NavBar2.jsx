import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar2() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Hello World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"></Nav>
          <Nav>
            <NavLink to="/auth/home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/auth/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/auth/contactus" className="nav-link">
              Contact Us
            </NavLink>
            <NavLink to="/auth/signup" className="nav-link">
              Sign Up
            </NavLink>
            <NavLink to="/home" className="nav-link">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar2;
