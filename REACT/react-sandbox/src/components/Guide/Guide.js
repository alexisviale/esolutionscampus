import React, { Component } from 'react'
import homer from './homer.png'
import './Guide.css'


const Guide = () => {

        return (
            <div className='guide'>
                <img alt='Homero Simpson' src={homer}/>
                <p>Click en + INFO para más información</p>
            </div>
        )


}

export default Guide