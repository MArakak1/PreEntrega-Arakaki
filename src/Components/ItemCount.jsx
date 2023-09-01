import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/ShoppingCartContext';
import '../Estilos/itemCount.css';

const ItemCount = ({ stock, item = { cuadro } }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const sumar = () => {
    count < stock ? setCount(count + 1) : console.log("No hay más stock disponible");
  };

  const restar = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <div className="item-count">
      <button onClick={restar}>-</button>
      <span className="count">{count}</span>
      <button onClick={sumar}>+</button>
      <button className="add-to-cart" onClick={() => addToCart(item, count)}>
        Agregar a Carrito
      </button>
    </div>
  );
};

export default ItemCount;
