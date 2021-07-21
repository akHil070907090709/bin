import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">BIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-3">
            <Nav.Link href="#learn">Learn</Nav.Link>
            <Nav.Link href="#compete">Compete</Nav.Link>
            <NavDropdown title="Network" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#teaching">Teaching</NavDropdown.Item>
              <NavDropdown.Item href="#create-labs">
                Create Labs
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Education" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#teaching">Teaching</NavDropdown.Item>
              <NavDropdown.Item href="#create-labs">
                Create Labs
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>

          <Nav>
            <Button variant="outline-success" className="mx-2">
              Login
            </Button>
            <Button variant="warning">Join Now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
