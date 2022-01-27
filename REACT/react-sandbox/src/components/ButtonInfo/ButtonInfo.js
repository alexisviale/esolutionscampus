import React from 'react'

const ButtonInfo = ({info, showInfo}) => {
    
    return (
        <button onClick={() => showInfo(info)}>Prueba</button>
    )
}

export default ButtonInfo