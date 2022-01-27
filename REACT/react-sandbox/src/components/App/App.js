import './App.css';
import Guide from '../Guide/Guide';

const displayProduct = event => alert(event.target.title)

const products = [
  {
    emoji: "🍓",
    name: "frutilla",
    price: 250
  },
  {
    emoji: "🥑",
    name: "palta",
    price: 80
  },
  {
    emoji: "🥕",
    name: "zanahoria",
    price: 100
  },
  {
    emoji: "🍒",
    name: "cereza",
    price: 250
  },
  {
    emoji: "🧅",
    name: "cebolla",
    price: 150
  },
  {
    emoji: "🍅",
    name: "tomate",
    price: 300
  }
]

function App() {
  const shopName = 'La Verdulería de Homero'
  const display = true;
  return (
      <div className='container'>
        <h1 id='shopName'>{shopName}</h1>
        {display && <p>Abierto al público</p>}
        <Guide />
        <ul>
          {
            products.map(product => (
              <li key={product.name}>
                  <button onClick={displayProduct}>
                    <span role='img' aria-label={product.name} id={product.name} title={product.name + '  ' + product.price}>
                      {product.emoji}
                    </span>
                  </button>
              </li>
            ))
          }
        </ul>
      </div>   
  )
}

export default App;
