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
            <Nav.Link href={`/category/elementos`}>Colección Elementos</Nav.Link>
            <Nav.Link href={`/category/manos`}>Colección Manos</Nav.Link>
            <Nav.Link href={`/category/collage`}>Colección Collage</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
      <Nav.Link href="/Cart">
        <CartWidget />
      </Nav.Link>
    </Navbar>
  );
}

export default NavBar