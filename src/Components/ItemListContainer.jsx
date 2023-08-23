import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { category } = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const itemColeccion = collection(db, "Cuadros");
    getDocs(itemColeccion).then((snapshot) => {

      setProductos(snapshot.docs.map((doc) => (
        { id: doc.id, ...doc.data() })))
    })

  }, []);


  const productosFiltrados = productos.filter(
    (producto) => producto.categoria == category)


  return (
    <>
      {<ItemList productos={productosFiltrados} />}
    </>
  )
}

export default ItemListContainer