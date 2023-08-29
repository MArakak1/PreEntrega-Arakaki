import React from 'react';
import ItemListContainer from './ItemListContainer';
import '../Estilos/Home.css'; // Agrega un archivo Home.css en la misma ubicación que este componente

const Home = () => {
  return (
    <div className='contenedor'>
      <h1 className='titulo'>Siempre hay Espacio para un Cuadro!!</h1>
      <ItemListContainer />
    </div>
  );
}

export default Home;