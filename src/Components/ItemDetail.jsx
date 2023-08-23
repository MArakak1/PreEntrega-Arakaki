import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import {useParams} from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useEffect, useState } from 'react';

const ItemDetail = ({ cuadros }) => {
 const {id} = useParams();
 const [producto, setProducto] = useState([]);
 
 useEffect (() => {
  const db = getFirestore();
  const cuadroRef = doc(db, "Cuadros",id);

  getDoc(cuadroRef).then ((snapshot) => {
    if(snapshot.exists()){
      setProducto(snapshot.data());
    } else {
      console.log("no está el documento")
    }
  });
 }, []);
 
  return (
           <div key={p.id}>
              <Card.Header>{p.nombre}</Card.Header>
              <Card.Text>{p.descripcion}</Card.Text>
              <Card.Text>{p.categoria}</Card.Text>
              <Card.Text>{p.precio}</Card.Text>
              <footer>
                <ItemCount initial={0} stock={10} item={p} />
              </footer>


    </div>
  )
}

export default ItemDetail