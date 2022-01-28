import './App.css';
import Guide from '../Guide/Guide';
import data from './data';
import Product from '../Product/Product';
import Alert from '../Alert/Alert';
import CartSucces from '../CartSucces/CartSucces';
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  wrapper: {
    fontSize: '0.9em'
  }
})

export function showInfo(info) {
  const alertInfo = Object.entries(info)
    .map(info => `${info[0]}: ${info[1]}`)
    .join('\n')
  alert(alertInfo)
}

function App() {
  const shopName = 'La Verdulería de Homero'
  const display = true;
  const classes = useStyles()

  return (
      <div className='container'>
        <h1 id='shopName'>{shopName}</h1>
        {display && <p>Abierto al público</p>}
        <Guide />
        <div className={classes.wrapper}>
          <Alert title='No hay productos' type='error'>
            <div>Sus Productos están fuera de stock.</div>
          </Alert>
          <CartSucces />
        </div>
        <div className='wrapper'>
          {data.map(product => (
            <Product 
              key={product.name}
              name={product.name}
              emoji={product.emoji}
              stock={product.stock}
              price={product.price}
              variety={product.variety}
              info={product.info}
              showInfo={showInfo}
              ranked={product.ranked}
            />
          ))}
        </div>
      </div>   
  )
}

export default App;
