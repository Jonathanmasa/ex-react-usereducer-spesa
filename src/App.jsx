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
  return (
    <div className="App">
      <h1>Lista Prodotti</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong>: €{product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
