import React, { useContext } from 'react';
import { CartContext } from '../Context/ShoppingCartContext';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../Estilos/cart.css';

const Cart = () => {
  const { cart, precioTotal, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      {cart.map((prod) => (
        <Card key={prod.id} className="card">
          <Card.Header>{prod.nombre}</Card.Header>
          <Card.Text>{prod.descripcion}</Card.Text>
          <Card.Text>${prod.precio}</Card.Text>
          <Card.Text>{prod.count}</Card.Text>
        </Card>
      ))}

      {cart.length > 0 ? (
        <div className="cart-summary">
          <h2>Precio Total : {precioTotal()}</h2>
          <button className="clear-cart" onClick={clearCart}>
            Vaciar Carrito
          </button>
          <button className="finish-button">
            <Link to="/checkout" style={{color: "white"}}>Terminar Compra</Link>
          </button>
        </div>
      ) : (
        <div className="cart-summary">
          <h2>¡No hay cuadros en el Carrito!</h2>
          <Button style={{backgroundColor:"purple", color: "white", padding: "1rem", fontSize:" 1rem"}}variant="flat" size="xxl">
          <Link to="/" style= {{color: "white"}}>Ir a comprar cuadros</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;