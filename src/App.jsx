import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import ShoppingCartContext from './Context/ShoppingCartContext';
import { useContext, useState } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQVdQaUKwcYgS0rk_LbYLqyhrxe_UPZhM",
  authDomain: "mercado-de-cuadros.firebaseapp.com",
  projectId: "mercado-de-cuadros",
  storageBucket: "mercado-de-cuadros.appspot.com",
  messagingSenderId: "341035700838",
  appId: "1:341035700838:web:46a4dbd1addd62ddf713a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => {
  const [cart, addToCart] = useState([])


  return (
    

   <BrowserRouter>
    <ShoppingCartContext value = { {cart, addToCart} }>
      <NavBar className='NavBar-Inicio' />
      
      <Routes>

       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route exact path="/cart" element={<Cart/>}/>
       <Route exact path="/category/:category" element={<ItemListContainer/>}/>
       <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>

      </Routes>

    </ShoppingCartContext>
    </BrowserRouter>
  )
};

export default App