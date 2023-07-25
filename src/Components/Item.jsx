import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = () => {
  return (
    <>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Cuadro N°1</Card.Title>
        <Card.Text>
          Este cuadro fue hecho con todo el amor del mundo
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item