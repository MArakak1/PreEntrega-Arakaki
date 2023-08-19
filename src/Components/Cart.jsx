import {useContext} from 'react'
import { CartContext } from '../Context/ShoppingCartContext'

const Cart = () => {

  const {cart, setCart, longitud} = useContext (CartContext)

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>

      <p>{cart}</p>
    </div>
  )
}

export default Cart