import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import brand from '../public/cultura.svg';
import { Link } from 'react-router-dom';
import '../Estilos/navbar.css'; 

const NavBar = () => {
  return (
    <Navbar className="NavBar" bg="dark" data-bs-theme="dark">
      <Nav.Link href="/">
        <img src={brand} alt="logo-tienda" width="40px" heigh="40px" />
        <Navbar.Brand>Mercado de Cuadros</Navbar.Brand>
      </Nav.Link>
      <NavbarToggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/category/Elementos">Colección Elementos</Nav.Link>
          <Nav.Link href="/category/Manos">Colección Manos</Nav.Link>
          <Nav.Link href="/category/Collage">Colección Collage</Nav.Link>
        </Nav>
        <Link to="/Cart" className="cart-link" style={{marginLeft: "200px"}}>
          <CartWidget  />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;