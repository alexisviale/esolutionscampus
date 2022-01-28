import React from 'react'
import Alert from '../Alert/Alert'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    wrapper: {
        borderTop: 'black solid 1px',
        display: 'flex',
        flexWrap: 'wrap',
        '& h2': {
            width: '100%'
        },
        '& $item': {
            marginRight: 20,
        }
    },
    item: {}
})

export default function CartSucces() {
    
    const classes = useStyles()

    return (
        <Alert title='Carrito de compras' type='success'>
            <div className={classes.wrapper}>
                <h2>
                    Ha agregado 10 productos
                </h2>
                <div className={classes.item}>
                    <div>Manzanas</div>
                    <div>Cantidad: 6</div>
                </div>
                <div className={classes.item}>
                    <div>Peras</div>
                    <div>Cantidad: 4</div>
                </div>
            </div>
        </Alert>
    )
}