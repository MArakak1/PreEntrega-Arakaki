import { useContext } from 'react'
import { CartContext } from '../Context/ShoppingCartContext'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cart, precioTotal, clearCart } = useContext(CartContext);
  
  
  return (
    <div>      
          {cart.map ((prod) => {
          return(
            <Card key={prod.id}>
          <Card.Header>{prod.nombre}</Card.Header>
          <Card.Text>{prod.descripcion}</Card.Text>
          <Card.Text>${prod.precio}</Card.Text>
          <Card.Text>{prod.count}</Card.Text>
          </Card>
          )
        })
      }

    {
     cart.length > 0 ?
     <><h2>Precio Total : {precioTotal()}</h2>
     <button onClick ={clearCart}>Vaciar Carrito</button>
     <button>
      <Link to='/checkout'>
      Terminar Compra
      </Link>
      </button>
     </> :
     <><h2> ¡No hay cuadros en el Carrito!</h2>
     <Link to='/'> ir a comprar cuadros</Link>
     </>
    } 
     
    </div>
  )
}

export default Cart