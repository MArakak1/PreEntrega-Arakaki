import React, { useContext } from 'react';
import { CartContext } from '../Context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import '../Estilos/cartWidget.css';

const CartWidget = () => {
  const { cantidadEnCart } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget" data-count={cantidadEnCart()}>
      <i className="bi bi-cart4 fs-2" />
    </Link>
  );
};

export default CartWidget;