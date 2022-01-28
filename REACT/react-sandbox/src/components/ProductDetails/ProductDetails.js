import React from 'react'
import PropTypes from 'prop-types'
import './ProductDetails.css'

function convertRank(ranked) {
    let convertedRank = ' '
    for(let i=0; i< ranked; i++){
        convertedRank += '⭐'
    }
    return convertedRank
}
export default function ProductDetails({ ranked, variety }) {
    
    return (
        <div className='wrapper-product-details'>
            <h3>Detalles:</h3>
            <div>Calificación: {convertRank(ranked)}</div>
            <div>{variety.join(', ')}</div>
        </div>
    )
}

ProductDetails.propTypes = {
    ranked: PropTypes.number.isRequired,
    variety: PropTypes.arrayOf(PropTypes.string).isRequired,
}
