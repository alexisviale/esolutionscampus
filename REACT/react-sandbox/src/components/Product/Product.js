import React from "react";
import PropTypes from 'prop-types'
import ProductDetails from "../ProductDetails/ProductDetails";
import Card from '../Card/Card'
import './Product.css'

const Product = ({
    name,
    emoji,
    price,
    info,
    stock,
    showInfo,
    ...props
}) => {
    return (
        <Card title='Producto' details={<em>Producto nuevo</em>}>
            <h2>{emoji} - {name}</h2>
            <h3>Stock del producto: {stock}</h3>
            <h3>Precio: ${price}</h3>
            <ProductDetails {...props}/>
            <div className="product-wrapper">
                <button onClick={() => showInfo(info)}>+ INFO</button>
            </div>
        </Card>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
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