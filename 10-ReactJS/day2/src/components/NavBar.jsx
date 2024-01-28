import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Hello World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"></Nav>
          <Nav>
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/product" className="nav-link">
              Product
            </NavLink>
            <NavLink to="/category" className="nav-link">
              Category
            </NavLink>
            <NavLink to="/brand" className="nav-link">
              Brand
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contactus" className="nav-link">
              Contact Us
            </NavLink>
            <NavLink to="/settings" className="nav-link">
              Settings
            </NavLink>
            <NavLink to="/auth/login" className="nav-link">
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
