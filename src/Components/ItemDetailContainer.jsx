import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  const productos = [
    { id: 1, nombre: "Cuadro 1", description: "Realizado por Marcela", stock: 20, category: `elementos` },
    { id: 2, nombre: "Cuadro 2", description: "Realizado por Luciano", stock: 20, category: `manos` },
    { id: 3, nombre: "Cuadro 3", description: "Realizado por Julieta", stock: 20, category: `collage` },
    { id: 4, nombre: "Cuadro 4", description: "Realizado por Marcela", stock: 20, category: `elementos` },
    { id: 5, nombre: "Cuadro 5", description: "Realizado por Julieta", stock: 20, category: `manos` },
    { id: 6, nombre: "Cuadro 6", description: "Realizado por Luciano", stock: 20, category: `collage` },
    { id: 7, nombre: "Cuadro 7", description: "Realizado por Marcela", stock: 20, category: `elementos` },
    { id: 8, nombre: "Cuadro 8", description: "Realizado por Marcela", stock: 20, category: `manos` },
    { id: 9, nombre: "Cuadro 9", description: "Realizado por Julieta", stock: 20, category: `colleage` },

  ]

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getProductos
    .then((res) => {
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <div style={{ borderColor: 'black',  display: 'center', width: '18rem',  justifyContent:'center', alignItems:'center' }} >
      <ItemDetail
        productos={productos}
      />
    </div>
  )
}

export default ItemDetailContainer