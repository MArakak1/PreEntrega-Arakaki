import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import '../Item.css';


const Item = ({nombre, descripcion, categoria, id, precio, imagen}) => {
  return (
    <div className="div-Item">

        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            <Image src={imagen}/>
            {descripcion}
            {categoria}
            ${precio}
            </Card.Text>

         <footer>
          <Button className= "boton-Item" >
            <Link to={`/item/${id}`}>
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