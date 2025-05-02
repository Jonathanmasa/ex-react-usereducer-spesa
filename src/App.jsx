import { useState } from 'react';
import './App.css';

// Array iniziale dei prodotti disponibili
const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

function App() {
  // Stato locale che tiene traccia dei prodotti aggiunti al carrello
  const [addedProducts, setAddedProducts] = useState([]);

  // Funzione per aggiungere un prodotto al carrello
  const addToCart = (product) => {
    const existingProduct = addedProducts.find((p) => p.name === product.name);
    
    if (existingProduct) {
      // Se il prodotto è già nel carrello, incremento la quantità
      updateProductQuantity(product.name);
    } else {
      // Se non è presente, aggiungo con quantità 1
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    }
  };

  // Funzione che incrementa la quantità di un prodotto già presente nel carrello
  const updateProductQuantity = (productName) => {
    setAddedProducts((prev) =>
      prev.map((p) =>
        p.name === productName
          ? { ...p, quantity: p.quantity + 1 } // Incremento quantità
          : p // Altrimenti restituisce il prodotto così com'è
      )
    );
  };

  // Funzione per rimuovere un prodotto completamente dal carrello
  const removeFromCart = (productName) => {
    setAddedProducts((prev) => prev.filter((p) => p.name !== productName));
  };

  // Calcolo il totale da pagare: somma dei (prezzo × quantità) per ogni prodotto
  const calculateTotal = () => {
    return addedProducts
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2); // Arrotonda a 2 decimali
  };

  return (
    <div className="App">
      <h1>Lista Prodotti</h1>

      {/* Lista dei prodotti acquistabili */}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong>: €{product.price.toFixed(2)}
            {/* Bottone per aggiungere al carrello */}
            <button onClick={() => addToCart(product)} style={{ marginLeft: '10px' }}>
              Aggiungi al carrello
            </button>
          </li>
        ))}
      </ul>

      {/* Se ci sono prodotti nel carrello, mostro la lista */}
      {addedProducts.length > 0 && (
        <>
          <h2>Carrello</h2>
          <ul>
            {addedProducts.map((product, index) => (
              <li key={index}>
                {product.name} - €{product.price.toFixed(2)} - Quantità: {product.quantity}
                {/* Bottone per rimuovere dal carrello */}
                <button
                  onClick={() => removeFromCart(product.name)}
                  style={{ marginLeft: '10px' }}
                >
                  Rimuovi dal carrello
                </button>
              </li>
            ))}
          </ul>

          {/* Totale da pagare */}
          <h3>Totale: €{calculateTotal()}</h3>
        </>
      )}
    </div>
  );
}

export default App;




