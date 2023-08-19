import {useState, useContext } from 'react'
import { CartContext } from '../Context/ShoppingCartContext';

const ItemCount = ({stock, item}) => {
  const {cart, setCart} = useContext (CartContext)
  const [count, setCount] = useState(1)

  const sumar = () => {
    //boton para sumar
    count < stock ? setCount(count +1)
     :console.log("No hay más stock disponible")
    }
    
    const restar = () => {
      //boton para restar
      count > 1 && setCount (count -1)
    };
    
    const addToCart = () => {
      //boton para agregar al carro
      const productAdd = { ...item, count}
      console.log(productAdd)
      {cart.push(addToCart)}
    }


    return (
      <>
      <button onClick={sumar}>+</button>
      <>{count}</>
      <button onClick={restar}>-</button>
      <button onClick= {addToCart} >Agregar a Carrito</button>

    </>
  )
};
  
export default ItemCount

