import {useState} from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import { useContext } from 'react';
import { CartContext } from '../Context/ShoppingCartContext';
import '../Estilos/sendOrder.css'

const SendOrder = () => {
    const {cart, precioTotal} = useContext(CartContext);
    const[name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null);
    const db = getFirestore();

    const handleSubmit =(e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({id}) =>
        setOrderId(id))
    };

   
    const order ={
        buyer: {nombre: name, email: email},
        item: cart,
       precio: precioTotal(),
    };
    
    const ordersCollection = collection (db,"orden")
    
    console.log(order, ordersCollection)
 

    return (
    <div className="SendOrder">
        <h1>Finalizá tu compra!</h1>
        <form onSubmit={handleSubmit}> 
        <input type='text' placeholder="Nombre y Apellido"
        onChange={(e)=> setName(e.target.value)}
        />
        <input type='text' placeholder="Email"
        onChange={(e)=> setEmail(e.target.value)}
        />
        <button type="submit">Enviar Información</button>
        </form>
        <p> Número de Orden: {orderId}</p>
    </div>
  )
}

export default SendOrder