import { Card } from 'react-bootstrap';
import React from 'react';
import ItemCount from './ItemCount';
import {useParams} from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';


const ItemDetail = ({ cuadro }) => {
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
           <div key={cuadro.id}>
              <Card.Header>{cuadro.nombre}</Card.Header>
              <Image src= {cuadro.imagen}/>
              <Card.Text>{cuadro.descripcion}</Card.Text>
              <Card.Text>{cuadro.categoria}</Card.Text>
              <Card.Text>{cuadro.precio}</Card.Text>
              <footer>
                <ItemCount initial={0} stock={10} item={cuadro} />
              </footer>


    </div>
  )
}

export default React.memo(ItemDetail);