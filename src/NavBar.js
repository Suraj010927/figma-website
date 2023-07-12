import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import logo from "./mentor.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function NavBar() {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";
  return (
    <>
      <Navbar
        expand="lg"
        bg="body"
        sticky="top"
        className="align-items-center navtext shadow"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} height={80} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown
                title={<span className="text-dark">Filters</span>}
                id="basic-nav-dropdown"
                className="filter-dropdown text-primary"
              >
                <NavDropdown.Item href="#">Nothing</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav.Link as={NavLink} href="#" className="mx-auto">
              About Us
            </Nav.Link>

            <>
              <Nav className="mx-auto">
                <Nav.Link className="me-3 text-black">Blog</Nav.Link>
                <Button
                  variant="outline-primary"
                  className="flex-grow-0  rounded-pill px-4"
                  style={{
                    borderColor: "#047E70",
                    color: "#047E70",
                    opacity: isDashboardPage ? 0 : 1,
                    pointerEvents: isDashboardPage ? "none" : "auto",
                  }}
                >
                  Earning Calculator
                </Button>
              </Nav>

              <Nav className="mx-auto">
                <Button
                  variant="primary"
                  className="me-lg-3 rounded-pill px-4"
                  style={{
                    borderColor: "#047E70",
                    backgroundColor: "#047E70",
                    color: "white",
                    opacity: isDashboardPage ? 0 : 1,
                    pointerEvents: isDashboardPage ? "none" : "auto",
                  }}
                  as={NavLink}
                  to="/dashboard"
                >
                  Login
                </Button>

                <Button
                  variant="primary"
                  className="rounded-pill px-4"
                  style={{
                    backgroundColor: "#047E70",
                    color: "white",
                    opacity: isDashboardPage ? 0 : 1,
                    pointerEvents: isDashboardPage ? "none" : "auto",
                  }}
                >
                  Sign Up
                </Button>
              </Nav>
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
