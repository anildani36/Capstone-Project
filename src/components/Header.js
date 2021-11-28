import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Button, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div>
          <Navbar bg="light" expand="lg">
          <Container fluid>
          <Navbar.Brand href="/">Sweet Basket</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="Blogs" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/blogs/sweets">Sweet Blogs</NavDropdown.Item>
          <NavDropdown.Item href="/blogs/food">Food Blogs</NavDropdown.Item>
          <NavDropdown.Item href="/blogs/bakery_products">Bakery Products</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Receipies from Top Chefs
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/user/login">
          Login
        </Nav.Link>
        <Nav.Link href="/user/register">
          Sign up
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
