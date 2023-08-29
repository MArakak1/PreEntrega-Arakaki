import {useState} from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import { useContext } from 'react';
import { CartContext } from '../Context/ShoppingCartContext';


const SendOrder = () => {
    const {cart, precioTotal} = useContext(CartContext)
    const[name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null);


    const db = getFirestore()

    const handleSubmit =(e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({id}) =>
        setOrderId(id))
        SendOrder()
    };

    const order ={
        buyer:{nombre: name, email: email},
        items: cart,
        Total: precioTotal
    };
    
    const ordersCollection = collection (db,"orden")
 

    const SendOrder = () => {
       const order={ 
        buyer:{name, email},
        items: cart,
        Total: precioTotal
       }

          const ordersCollection = collection (db, "orders")

        addDoc(ordersCollection, order).then (({id}) => setOrderId(id))
    };

 

    return (
    <div>
        <h1>Enviando Ordenes</h1>
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