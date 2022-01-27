import React from "react";
import PropTypes from 'prop-types'
import './Product.css'

const Product = ({
    name,
    emoji,
    price,
    info,
    stock,
    variety,
    showInfo,
    ButtonInfo,
    buttonName
}) => {
    return (
        <div className="product-wrapper">
            <h2>{emoji} - {name}</h2>
            <h3>Stock del producto: {stock}</h3>
            <h3>Precio: ${price}</h3>
            <div>{variety.join(', ')}</div>
            <button onClick={() => showInfo(info)}>+ INFO</button>
            <ButtonInfo info={info} showInfo={showInfo} buttonName={buttonName}/>
        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    variety: PropTypes.arrayOf(PropTypes.string).isRequired,
    info: PropTypes.shape({
            uses: PropTypes.string,
            wiki: PropTypes.string
        }),
    showInfo: PropTypes.func.isRequired,
    ButtonInfo: PropTypes.func.isRequired
}

Product.defaultProps = {
    info: {
        info: 'No hay información adicional'
    }
} 

export default Product