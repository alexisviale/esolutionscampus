import React from 'react'
import {showInfo} from '../App/App'

const ButtonInfo = ({info}) => {
    
    return (
        <button onClick={() => showInfo(info)}>Prueba</button>
    )
}

export default ButtonInfo