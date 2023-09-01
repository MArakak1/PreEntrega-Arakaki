import React from 'react';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';



const ItemDetail = ({ cuadro }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const cuadroRef = doc(db, "Cuadros", id);

    getDoc(cuadroRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("no está el documento")
      }
    });

  }, []);

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
              src={cuadro.imagen}
              style={{
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
              }}/>
         <Card.Body>
          <Card.Title>{cuadro.nombre}</Card.Title>
          <Card.Text>
            <p>
              {cuadro.descripcion}, con todo el amor del mundo.
            </p>
            Precio: ${cuadro.precio}
            </Card.Text>
        </Card.Body>
        <ItemCount initial={0} stock={10} item={cuadro} />
          </Card>

        </div>
    </div>
  );
};

export default React.memo(ItemDetail);