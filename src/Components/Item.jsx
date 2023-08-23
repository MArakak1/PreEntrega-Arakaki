import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../Item.css';


const Item = ({nombre, descripcion, categoria, id, precio}) => {
  return (
    <div className="div-Item" style={{ display:'center', width: '18rem' }}>

        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            <p>{descripcion}</p>
            {categoria}
            <p>
              ${precio}
            </p>
            </Card.Text>

         <footer>
          <Button className= "boton-Item" >
            <Link to={`/item/${id}`} style={{color:'black'}}>
            Detalles
            </Link>
          </Button>
          </footer>

        </Card.Body>
    </div>
  )
}

export default Item

// <Card.Img variant="top" src="holder.js/100px180" />