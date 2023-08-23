import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/ShoppingCartContext'

const CartWidget = () => {
  const {cantidadEnCart} = useContext(CartContext)
  
  return (
    <>
      <i className="bi bi-cart4 fs-2"></i>
      <p>{cantidadEnCart()}</p>
    </>
  )
}

export default CartWidget