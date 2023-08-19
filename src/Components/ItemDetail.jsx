import { Card } from 'react-bootstrap'
import { useParams} from 'react-router-dom'
import ItemCount from './ItemCount';


const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const productosFiltrados = productos.filter((productos) => productos.id == id)

  return (
    <div>
      {productosFiltrados.map((p) => {

        return (
          <div style={{ width: '18rem', justifyContent: 'center', alignItems: 'center' }}
            key={p.id}>

            <Card style={{ borderColor: 'black', display: 'flex', width: '18rem', justifyContent: 'center', alignItems: 'center' }}>
              <Card.Header>{p.nombre}</Card.Header>
              <Card.Text>{p.description}</Card.Text>
              <Card.Text>{p.category}</Card.Text>
              <footer>
                <ItemCount initial={0} stock={10} item={productosFiltrados} />
              </footer>
            </Card>

          </div>
        )
      })}
    </div>
  )
}

export default ItemDetail