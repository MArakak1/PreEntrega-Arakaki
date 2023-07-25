import React from 'react'

const ItemList = () => {

    const productos = [
        {id: 1, nombre: "Cuadro 1", description: "Realizado por Marcela", stock: 1},
        {id: 2, nombre: "Cuadro 2", description: "Realizado por Luciano", stock: 2},
        {id: 3, nombre: "Cuadro 3", description: "Realizado por Julieta", stock: 3}
    ]

    const getProductos = new Promise((resolve, reject) => {
        if (productos.lenght > 0 ) {
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        } else {
           reject(new Error("No hay datos"))
        }
    });


getProductos
.then((res)=>{
    console.log(res)
})
.catch ((error) =>{
    console.log(error)
})


    
   return (
        <div>ItemList</div>
    )
};

export default ItemList