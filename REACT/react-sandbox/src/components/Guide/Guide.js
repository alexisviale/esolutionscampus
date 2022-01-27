import React, { Component } from 'react'
import homer from './homer.png'
import './Guide.css'


const Guide = () => {

        return (
            <div className='guide'>
                <img alt='Homero Simpson' src={homer}/>
                <p>Seleccione el producto para obtener más info</p>
            </div>
        )


}

export default Guide