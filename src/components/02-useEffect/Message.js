import React, {useState, useEffect} from 'react'

const Message = () => {

    const [coors, setCoors] = useState({
        x:0, y:0
    })
    const {x, y} = coors

    useEffect(() => {
        const mouseMove = (e) => {
            const coordenadas = {x: e.x, y: e.y}
            setCoors(coordenadas)
        }

        window.addEventListener("mousemove", mouseMove);

        // el return limpia el effect
        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])


    return (
        <div>
            <h3>Hola que tal!</h3>
            <p>x:{x} y:{y}</p>
        </div>
    )
}

export default Message
