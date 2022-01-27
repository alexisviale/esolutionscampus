import React from 'react'
import PropTypes from 'prop-types'

const ButtonInfo = ({info, showInfo, buttonName}) => {
    
    return (
        <button onClick={() => showInfo(info)}>{buttonName}</button>
    )
}

ButtonInfo.propTypes = {
    info: PropTypes.string.isRequired,
    showInfo: PropTypes.func.isRequired,
    buttonName: PropTypes.func.isRequired
}

export default ButtonInfo