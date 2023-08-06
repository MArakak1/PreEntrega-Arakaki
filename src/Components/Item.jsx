import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../App.css';


const Item = ({nombre, description, category, id,}) => {
  return (
    <div style={{ display:'center', width: '18rem' }}>
      <Card>

        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {description}
            {category}
            </Card.Text>
         
          <Button style={{backgroundColor: 'beige', borderColor: 'black'}}>
            <Link to={`/item/${id}`} style={{color:'black'}}>
            Detalles
            </Link>
          </Button>

        </Card.Body>
      </Card>
    </div>
  )
}

export default Item

// <Card.Img variant="top" src="holder.js/100px180" />