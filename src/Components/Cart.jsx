import {useContext} from 'react'
import { CartContext } from '../Context/ShoppingCartContext'
import {Card} from 'react-bootstrap'

const Cart = () => {

  const {cart} = useContext (CartContext);

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>

      <h1>Carrito</h1>



      {
        cart.map ((prod) => {
          return(
          <Card key={prod.id}>
          <Card.Header>{prod.nombre}</Card.Header>
          <Card.Text>{prod.description}</Card.Text>
          <Card.Text>{prod.category}</Card.Text>
          <Card.Text>{prod.count}</Card.Text>
          </Card>
          )
        })
      }
    </div>
  )
}

export default Cart