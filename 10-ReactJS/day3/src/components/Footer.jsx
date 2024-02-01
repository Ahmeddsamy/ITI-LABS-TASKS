import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="positon-fixed fixed-bottom bg-dark navbar-dark"
    >
      <Container>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
