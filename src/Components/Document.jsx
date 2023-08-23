import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore, snapshotEqual} from 'firebase/firestore'


const Document = () => {
  const[producto, setProducto] = useState([])
  console.log(producto)


  useEffect (() => {
    const db = getFirestore()

    const unItem = doc(db,"Cuadros", "8il6PQ0w9PEOSxo12CRj")
    getDoc(unItem).then ((snapshot) => {
        if(snapshot.exists()){
            const docs = snapshot.data()
            setProducto(docs)
        }
    })

  },[])
  
  
  
  
    return (
    <div>
        <h1>Titulo
            {
                <div>
                    <h3>Producto: {producto.Nombre}</h3>
                    <h4>Colección: {producto.Coleccion}</h4>
                    <p>precio: ${producto.Precio}</p>
                </div>
            }
        </h1>
    </div>
  )
}

export default Document