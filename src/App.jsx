import './App.css'
import Coffee from './Coffee';
import Tea from './Tea';
import Pastries from './Pastries';
import './MenuStyles.css'
import Cart from './Cart';
import { useState } from 'react';

function App() {
  // Global cart state
  const [cart, setCart] = useState([]);
  const clearCart = ()=>{
    setCart([]);
  }
  
  const addToCart = (item) => {
    setCart((prevCart) => {
      // Check if item already exists
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);

      if (existingItem) {
        // Increase quantity
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // Add new item with quantity = 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  
  const removeFromCart = (index) => {
  setCart((prevCart) => {
    return prevCart
      .map((item, i) => {
        if (i !== index) return item;

        // If quantity > 1, reduce it
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }

        // If quantity = 1, return null (we'll filter out later)
        return null;
      })
      .filter(Boolean); // remove null entries
  });
};

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">☕ React Café</span>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Coffee addToCart={addToCart} />
          </div>
          <div className="col-md-4">
            <Tea addToCart={addToCart} />
          </div>
          <div className="col-md-4">
            <Pastries addToCart={addToCart} />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 mx-auto">
            <Cart 
              cart={cart} 
              removeFromCart={removeFromCart} 
              clearCart={clearCart} 
            />
          </div>
        </div>
      </div>
  </div>
  )
 
}

export default App