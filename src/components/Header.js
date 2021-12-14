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
        <div>
          <Navbar  bg="dark" variant="dark" expand="lg" className='abcd'>
          <Container>
          <Navbar.Brand href="/"><h3 style={{color:'rgb(191, 255, 0)'}}>SWEET BASKET</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ height: '70px',maxHeight:'120px' }}
              navbarScroll
            >
        <div className="nav_names">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link className="nav1" href="/services">Services</Nav.Link>
        <Nav.Link className="nav2" href="/about">About</Nav.Link>
        <NavDropdown title="Food Blogs" id="navbarScrollingDropdown" className="nav3">
          <NavDropdown.Item href="https://www.loveandlemons.com/">Love and Lemons</NavDropdown.Item>
          <NavDropdown.Item href="https://cookieandkate.com/">Cookie and Kate</NavDropdown.Item>
          <NavDropdown.Item href="https://minimalistbaker.com/">Minimalist Baker</NavDropdown.Item>
          <NavDropdown.Item href="https://www.101cookbooks.com/">101 Cookbooks</NavDropdown.Item>
          <NavDropdown.Item href="http://www.greenkitchenstories.com/">Green Kitchen Stories</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="https://www.budgetbytes.com/">
          Budget Bytes
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="nav4" href="/user/login">
          Sign In
        </Nav.Link>
        <Nav.Link className="nav5" href="/user/register">
          Sign Up
        </Nav.Link>
        <Nav.Link className="nav6" href="https://rzp.io/l/ptIKdmORh">Checkout</Nav.Link>
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
        <Nav.Link className='cart__icon' style={{color:'LimeGreen ', paddingLeft:'10px' }} onClick={showHideCart}>BASKET
          <i
            // className='fa fa-shopping-cart'
            // aria-hidden='true'
            // onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </Nav.Link>
      </div>

    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
