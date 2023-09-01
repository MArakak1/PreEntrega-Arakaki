import React from 'react';
import ItemListContainer from './ItemListContainer';
import '../Estilos/Home.css';

const Home = () => {
  return (
    <div style={{
      textAlign: "center",
      padding: "50px",
      height: "80vh",
      display: "center",
      flexWrap: "wrap",
      
      }}>
      <h1 className='titulo'>Siempre hay Espacio para un Cuadro!!</h1>
      <ItemListContainer />
    </div>
  );
}

export default Home;