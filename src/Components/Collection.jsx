import {useEffect, useState} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const Collection = () => {
  const [productos, setProductos] = useState ([])
  console.log(productos)


useEffect (() => {
    const db = getFirestore()
    
    const itemColeccion = collection(db, "Elementos")
    getDocs(itemColeccion).then((snapshot) =>{
        const docs = snapshot.docs.map((doc) => doc.data())
        setProductos(docs)
    })
},[])


  
  
    return (
    <div>
        <h1>Título</h1>
        {
            productos.map((producto) => (
                <div key={producto.nombre}>
                    <h3>Producto: {producto.nombre}</h3>
                    <h4>Descripción: {producto.descripcion}</h4>
                    <p>Precio: ${producto.precio}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Collection