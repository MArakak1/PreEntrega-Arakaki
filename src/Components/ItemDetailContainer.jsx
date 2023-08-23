import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import {useParams} from 'react-router-dom'

 
const ItemDetailContainer = () => {
  const {id} = useParams()
  const[producto, setProducto] = useState([])

  useEffect (() => {
    const db = getFirestore()

    const unItem = doc(db,"Elementos",`${id}`);
    getDoc(unItem).then ((snapshot) => {
        if(snapshot.exists()){
            const docs = snapshot.data()
            setProducto(docs)
        }
    });
  },[]);


  return (
    <div style={{ borderColor: 'black',  display: 'center', width: '18rem',  justifyContent:'center', alignItems:'center' }} >
      <ItemDetail
        productos={producto}
      />
    </div>
  )
}

export default ItemDetailContainer