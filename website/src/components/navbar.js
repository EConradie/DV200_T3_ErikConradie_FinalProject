import React from "react";
import { Container, NavbarBrand } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';




function BasicNav() {

    return (
        <Navbar style={{height:'90px'}} data-bs-theme="dark" variant="dark" collapseOnSelect expand="lg" className="nav-color">
      <Container>
        <Navbar.Brand href="/">JEC Knives</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{fontWeight:'500', letterSpacing:'1.5px'}} href="/#featured">FEATURED</Nav.Link>
            <Nav.Link style={{fontWeight:'500', letterSpacing:'1.5px'}} href="/ProductPage">SHOP</Nav.Link>
            <NavDropdown style={{fontWeight:'500', letterSpacing:'1.5px'}} title="ADMIN" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/inventory">INVENTORY</NavDropdown.Item>
              <NavDropdown.Item href="/orders">ORDERS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link style={{color:"#F89520", fontWeight:'500', letterSpacing:'1.5px'}} href="#deets">ACCOUNT</Nav.Link>
            <Nav.Link style={{color:"#F89520", fontWeight:'500', letterSpacing:'1.5px'}} eventKey={2} href="#memes">
              CART
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );

}

export default BasicNav;