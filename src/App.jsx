import React from 'react'
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';



const App = () => {

  return (
    <BrowserRouter>
      <NavBar className='NavBar-Inicio' />
      
      <Routes>

       <Route exact path="/home" element={<Home/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route exact path="/cart" element={<Cart/>}/>
       <Route exact path="/category/:category" element={<ItemListContainer/>}/>
       <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>

      </Routes>

    </BrowserRouter>
  )
};

export default App