import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';


const App = () => {
  return (
    <Container>
      <NavBar />

      <ItemListContainer greeting="Siempre hay Espacio para un Cuadro!"/>

    </Container>
  )
}

export default App