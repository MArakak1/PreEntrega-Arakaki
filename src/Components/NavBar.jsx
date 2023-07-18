import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';


const NavBar = () => {
    return (
    <>   
    <Navbar bg="light" data-bs-theme="light">
        <Container>
         <Navbar.Brand href="#home">Mercado de Cuadros</Navbar.Brand>
         <NavbarToggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="#Coleccion-Elementos">Colección Elementos</Nav.Link>
              <Nav.Link href="#Coleccion-Manos">Colección Manos</Nav.Link>
              <Nav.Link href="#Coleccion-Zonas-Morbidas">Colección Collage</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget/>
    </Navbar>
    </>
    );
}

export default NavBar