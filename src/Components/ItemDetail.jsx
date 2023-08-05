import React from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const productosFiltrados = productos.filter((productos) => productos.id == id)

  return (
    <div>
      {productosFiltrados.map((p) => {

        return (
          <div style={{ display:'center', width: '18rem' }} 
           key={p.id}>
            
              <Card style={{ borderColor: 'black',  display: 'center', width: '18rem' }}>
                <Card.Header>{p.nombre}</Card.Header>
                <Card.Text>{p.description}</Card.Text>
                <Card.Text>{p.category}</Card.Text>
              </Card>
            
          </div>
            )
        })}
   </div>
  )
}

export default ItemDetail