import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import {doc, getDocs, getFirestore} from 'firebase/firestore'

 
const ItemDetailContainer = () => {
  const[producto, setProducto] = useState([])

  useEffect (() => {
    const db = getFirestore();

    const unItem = doc(db,"Cuadros");
    getDocs(unItem).then ((querySnapshot) => {
        const cuadros = querySnapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id }));
        setProducto(cuadros);
    });
  },[]);


  return (
    <div style={{ borderColor: 'black',  display: 'center', width: '18rem',  justifyContent:'center', alignItems:'center' }} >
      <ItemDetail cuadros={producto}
      />
    </div>
  )
}

export default ItemDetailContainer