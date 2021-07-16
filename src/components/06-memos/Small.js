import React, {memo} from 'react'

// memo es usado para memorizar las peticiones en caso de redibujar la aplicacion y solo hacer un llamado 

const Small = memo(({value}) => {
    console.log("me volvi a llamar :(")
    return (
        <small>
            {value}
        </small>
    )
})

export default Small
