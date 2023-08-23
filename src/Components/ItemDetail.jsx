import { Card } from 'react-bootstrap'
import { useParams} from 'react-router-dom'
import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([])

  useEffect (() => {
    const db = getFirestore()

    const unItem = doc(db,"Elementos",`${id}`);
    getDoc(unItem).then ((snapshot) => {
        if(snapshot.exists()){
            const docs = snapshot.data()
            setProducto(docs)
        }
    });
  },[]);

  const productoFiltro = producto.filter((producto)=> producto.id == id)

  return (
    <div>
      {productoFiltro.map((producto) => {

        return (
          <div style={{ width: '18rem', justifyContent: 'center', alignItems: 'center' }}
            key={p.id}>

            <Card style={{ borderColor: 'black', display: 'flex', width: '18rem', justifyContent: 'center', alignItems: 'center' }}>
              <Card.Header>{producto.nombre}</Card.Header>
              <Card.Text>{producto.descripcion}</Card.Text>
              <Card.Text>{producto.precio}</Card.Text>
              <footer>
                <ItemCount initial={0} stock={10} item={p} />
              </footer>
            </Card>

          </div>
        )
      })}
    </div>
  )
}

export default ItemDetail