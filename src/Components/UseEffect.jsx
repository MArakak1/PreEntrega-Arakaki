import { useEffect, useState } from 'react'

const UseEffect = () => {

    const [mensaje, setMensaje] = useState("Mensaje Inicial")
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log("efecto secundario")
    }, [mensaje])

    return (
        <div>
            <p>{mensaje}</p>
            <button onClick={() => setMensaje("Mensaje Modificado")}>Cambio</button>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>Sumar</button>
        </div>
    )
}

export default UseEffect