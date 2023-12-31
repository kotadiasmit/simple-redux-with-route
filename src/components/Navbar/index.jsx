import "./index.scss";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isLoginSuccess } from "../store/reducer";

const NavbarComp = () => {
  const dispatch = useDispatch();

  return (
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
          <Link
            to="/"
            onClick={() => {
              dispatch(isLoginSuccess(false));
            }}
          >
            <button className="btn btn-success">Logout</button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
