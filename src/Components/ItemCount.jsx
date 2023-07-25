import { useEffect, useState } from 'react'

const ItemCount = () => {

  const [mensaje, setMensaje] = useState("Mensaje Inicial")
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log("efecto secundario")
  }, [contador])

  const sumar = () => {
    //condicional
    if(contador < 10) {
    setContador(contador + 1)
    }
  };

  const restar = () => {
    //condicional
    if (contador > 0) {
      setContador(contador - 1)
    }
  };

  const reset =() => {
    setContador (0)
  }


  return (
    <div>
      <p>{mensaje}</p>
      <button onClick={() => setMensaje("Mensaje Modificado")}>Cambio</button>
      <p>{contador}</p>
      <button onClick={sumar}>+</button>
      <button onClick= {reset}>Limpiar</button>
      <button onClick={restar}>-</button>

    </div>
  )
}

export default ItemCount