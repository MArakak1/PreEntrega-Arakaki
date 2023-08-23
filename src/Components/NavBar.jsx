import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import brand from '../public/cultura.svg'
import { Link } from 'react-router-dom';


const NavBar = () => {
    
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container >
        <Link to="/">
          <img src={brand} alt="logo-tienda" width='40px' heigh='40px' />
          <Navbar.Brand>Mercado de Cuadros</Navbar.Brand>
        </Link>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav>
            <Link to='/category/elementos'>
              Colección Elementos
              </Link>
            <Link to='/category/manos'>
              Colección Manos
              </Link>
            <Link to='/category/collage'>
              Colección Collage
              </Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
      <Link to="/Cart">
        <CartWidget />
      </Link>
    </Navbar>
  );
}

export default NavBar