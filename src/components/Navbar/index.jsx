import { useState } from "react";
import "./index.scss";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComp = () => (
  <Navbar
    expand="lg"
    className="bg-body-tertiary"
    data-bs-theme="dark"
    sticky="top"
  >
    <Container fluid>
      <Navbar.Brand className="nav-brand">Users List</Navbar.Brand>

      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Link to="/" className="">
          <button className="btn btn-success">Logout</button>
        </Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavbarComp;
