import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ShoppingCartContext from './Context/ShoppingCartContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import SendOrder from './Components/SendOrder';
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

  return (
    

    <ShoppingCartContext>
   <BrowserRouter>
      <NavBar className='NavBar-Inicio' />
      
      <Routes>

       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/cart" element={<Cart/>}/>
       <Route exact path="/category/:category" element={<ItemListContainer/>}/>
       <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
       <Route exact path="/checkout" element={<SendOrder/>}/>

      </Routes>

    </BrowserRouter>
    </ShoppingCartContext>
  )
};

export default App