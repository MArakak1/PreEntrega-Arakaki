import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { doc, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const unItem = doc(db, "Cuadros", id);
    getDocs(unItem)
      .then((snapshot) => {
        setProducto({
          ...snapshot.data(), id: snapshot.id
        })
      });
  }, []);


  return (
    <div style={{ borderColor: 'black', display: 'center', width: '18rem', justifyContent: 'center', alignItems: 'center' }} >
     {<ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer