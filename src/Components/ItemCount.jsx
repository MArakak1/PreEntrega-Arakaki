import { useState, useContext } from 'react'
import { CartContext } from '../Context/ShoppingCartContext';

const ItemCount = ({ stock, item = { p } }) => {

  const { cart, addToCart } = useContext(CartContext)

  const [count, setCount] = useState(1)

  const sumar = () => {
    //boton para sumar
    count < stock ? setCount(count + 1)
      : console.log("No hay más stock disponible")
  }

  const restar = () => {
    //boton para restar
    count > 1 && setCount(count - 1)
  };



  return (
    <>
      <button onClick={sumar}>+</button>
      <>{count}</>
      <button onClick={restar}>-</button>
      <button onClick={() => {addToCart (item, count)}} >Agregar a Carrito</button>

    </>
  )
};

export default ItemCount

