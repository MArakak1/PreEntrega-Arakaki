import Item from './Item';

const ItemList = ({ productos }) => {
   
   return (
        <div  style={{display: 'flex', justifyContent:'center', alignItems:'center', space:'10px'}}>
        {productos.map((p)=> {
            return (
                <Item
                key={p.nombre}
                id={p.id}
                category= {p.category}
                nombre={p.nombre}
                description={p.descripcion}
                precio={p.precio}
                />
            );
        })}
        </div>
    );
};

export default ItemList