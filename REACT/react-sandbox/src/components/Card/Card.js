import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export default function Card({ children, title, details}) {
    return (
        <div className="wrapper-card">
            <div className='wrapper-card-details'>
                <h2>{title}</h2>
                {details}
            </div>
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired,
    details: PropTypes.element
}

Card.defaultProps = {
    details: null
}