import React from 'react'
import Item from './Item';

const ItemList = ({ productos }) => {
   
   return (
        <div  style={{display: 'flex', justifyContent:'center', alignItems:'center', space:'10px'}}>
        {productos.map((p)=> {
            return (
                <Item
                key={p.id}
                id={p.id}
                nombre={p.nombre}
                description={p.description}
                stock={p.stock}
                />
            );
        })}
        </div>
    );
};

export default ItemList