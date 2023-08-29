import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const unItem = doc(db, "Cuadros", id);
    getDoc(unItem)
      .then((snapshot) => {
        setProducto({
          ...snapshot.data(), id: snapshot.id
        })
      });
  }, []);


  return (
    <div>
     {<ItemDetail cuadro ={producto}/>}
    </div>
  )
}

export default ItemDetailContainer