import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
/* import './Alert.css' */

const colors = {
    succes: '#1d5316',
    error: '#691f1f',

}

const useStyles = createUseStyles ({

    wrapper: {
        border: ({type}) => `${colors[type]} solid 1px`,
        marginBottom: 15,
        padding: 15,
        fontSize: '1.3em',
        '& > h2': {
            color: ({type}) => colors[type],
            margin: '0 0 10px 0'
        }
    }
})

export default function Alert({ children, title, type }) {
    

    const classes = useStyles({type})

    return (
        <div className={classes.wrapper}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

Alert.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}