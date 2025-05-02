// App.jsx
import { useState } from 'react';
import './App.css';

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = (product) => {
    const exists = addedProducts.find((p) => p.name === product.name);
    if (!exists) {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <h1>Lista Prodotti</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong>: €{product.price.toFixed(2)}
            <button onClick={() => addToCart(product)} style={{ marginLeft: '10px' }}>
              Aggiungi al carrello
            </button>
          </li>
        ))}
      </ul>

      {addedProducts.length > 0 && (
        <>
          <h2>Carrello</h2>
          <ul>
            {addedProducts.map((product, index) => (
              <li key={index}>
                {product.name} - €{product.price.toFixed(2)} - Quantità: {product.quantity}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;


