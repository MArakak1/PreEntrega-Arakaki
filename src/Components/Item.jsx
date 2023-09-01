import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


const Item = ({nombre, descripcion, id, precio, imagen}) => {
  return (
    <div style=
    {{display:"flex", flexDirection:"column", alignItems:"center", }} >
      <div style=
      {{
      backgroundColor:" #faf8f8",
      padding: "10px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
      }}>
        <Card style={{ width: '18rem' }}>
        <Image   variant="top"
              src={imagen}
              style={{
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
              }}/>
         <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}, con todo el amor del mundo.

            Precio: ${precio}
            </Card.Text>
        </Card.Body>
        <Button style={{backgroundColor:"purple", color: "white", padding: "1rem", fontSize:" 1rem"}}variant="flat" size="xxl" >
            <Link to={`/item/${id}`} style= {{color: "white"}}>
            Detalles
            </Link>
          </Button>
          </Card>

        </div>
    </div>
  )
}

export default Item