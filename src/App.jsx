import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import ItemList from './Components/ItemList';
import Item from './Components/Item';


const App = () => {
    
  return (
    <Container >
      <NavBar className='NavBar-Inicio'/>

      <ItemListContainer
        greeting="Siempre hay Espacio para un Cuadro!" />
      <ItemCount/>

      <ItemList/>
      <Item/>
    </Container>
  )
}

export default App