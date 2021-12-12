import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Button, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Header.css'
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Header() {
  const { cartItems, showHideCart } = useContext(CartContext);
    return (
        <div className="abcd">
          <Navbar  bg="dark" variant="dark" expand="lg">
          <Container>
          <Navbar.Brand href="/">SWEET BASKET</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ height: '70px' }}
              navbarScroll
            >
        <div className="nav_names">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
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
          Sign In
        </Nav.Link>
        <Nav.Link href="/user/register">
          Sign Up
        </Nav.Link>
        {/* <div className='navstar'>
        <div className='cart__icon'>
          <img src="../asserts/iconcart.png" alt="cart" />
          
            <div className='item__count'>
              <span></span>
            </div>
          
        </div>
      </div>
         */}
        </div>
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
      <div className='navhero'>
        <div className='cart__icon text-info'  onClick={showHideCart}>CART
          <i
            className='fa fa-shopping-cart'
            aria-hidden='true'
            // onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>

    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
