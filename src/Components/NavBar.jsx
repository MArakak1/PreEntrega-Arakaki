import '../index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import brand from '../public/cultura.svg'
import { Link } from 'react-router-dom';



const NavBar = () => {

  return (
    <Navbar className='NavBar' bg="dark" data-bs-theme="dark">
      <>
        <Nav.Link href="/">
          <img src={brand} alt="logo-tienda" width='40px' heigh='40px' />
          <Navbar.Brand>Mercado de Cuadros</Navbar.Brand>
        </Nav.Link>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='Nav.Link' href='/category/Elementos'>
              Colección Elementos
            </Nav.Link>
            <Nav.Link href='/category/Manos'>
              Colección Manos
            </Nav.Link>
            <Nav.Link href='/category/Collage'>
              Colección Collage
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
      <Link to="/Cart">
        <CartWidget />
      </Link>
    </Navbar>
  );
}

export default NavBar