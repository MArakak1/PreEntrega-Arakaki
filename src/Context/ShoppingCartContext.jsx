import { createContext, useState } from 'react'

// Contexto creado
export const CartContext = createContext(null);


export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item, count) => {
    //boton para agregar al carro
    const productAdd = { ...item, count }

    const newCart = [...cart]
    const checkCart = newCart.find((producto) => producto.id === productAdd.id)

    if (checkCart) {
      checkCart.count += count
      setCart(newCart)
    } else {
      newCart.push(productAdd)
      setCart([...cart, productAdd])
    }
  };

  const cantidadEnCart = () => {
    return cart.reduce  ((acc, prod) => acc + prod.count, 0)
  } 


  return (

    <CartContext.Provider value={{ cart, addToCart, cantidadEnCart }}>

      {children}

    </CartContext.Provider>
  )
}

export default ShoppingCartProvider