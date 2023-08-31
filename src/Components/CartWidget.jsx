import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/ShoppingCartContext'
import {Link} from 'react-router-dom'

const CartWidget = () => {
  const {cantidadEnCart} = useContext(CartContext)
  
  return (
    
      <Link to= '/cart' className='CartWidget'>
      <i className="bi bi-cart4 fs-2"/>
      <>{cantidadEnCart()}</>
      </Link>

  )
}

export default CartWidget