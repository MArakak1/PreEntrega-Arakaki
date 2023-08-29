import '../Estilos/ItemList.css';
import React from 'react'
import Item from './Item';

const ItemList = ({ productos }) => {
   
   return (
        <div className='contenedor.item'>
        {productos.map((p)=> {
            return (
                <Item
                key={p.nombre}
                id={p.id}
                category= {p.category}
                nombre={p.nombre}
                descripcion={p.descripcion}
                precio={p.precio}
                imagen={p.imagen}

                />
            );
        })}
        </div>
    );
};

export default React.memo(ItemList);