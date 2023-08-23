import React from 'react'
import ItemListContainer from './ItemListContainer'

const Home = () => {
  return (
   <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
   <h2>  Siempre hay Espacio para un Cuadro!!</h2>
   <ItemListContainer/>
  </div>
  )
}

export default Home