import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { category } = useParams()
  
  useEffect(() => {
    const db = getFirestore()
    const itemColeccion = category ? query(collection(db, "Cuadros"), where("categoria", "==", category)) : collection(db, "Cuadros");
    getDocs(itemColeccion).then((snapshot) => {

      setProductos(snapshot.docs.map((doc) => (
        { id: doc.id, ...doc.data() })))
    })

  }, [category]);


 
  return (
    <>
      {<ItemList productos={productos} />}
    </>
  )
}

export default ItemListContainer