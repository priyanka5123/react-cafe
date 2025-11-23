import './App.css'
import Coffee from './components/menu/Coffee';
import Tea from './components/menu/Tea';
import Pastries from './components/menu/Pastries';
import './MenuStyles.css'
import Cart from './components/Cart';
import { useState } from 'react';
import Tabs from './components/Tabs';

function App() {
  // Global cart state
  const [cart, setCart] = useState([]);
  const clearCart = ()=>{
    setCart([]);
  }
  const [activeTab, setActiveTab] = useState("coffee");

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
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </nav>

      <div className="container">

        {activeTab === 'coffee' && (
          <Coffee addToCart={addToCart} />
        )}

        {activeTab === 'tea' && (
          <Tea addToCart={addToCart} />
        )}

        {activeTab === 'pastries' && (
          <Pastries addToCart={addToCart} />
        )}

        <div className="row mt-4">
          <div className="col-md-12">
            <Cart 
              cart={cart} 
              removeFromCart={removeFromCart} 
              clearCart={clearCart} 
            />
          </div>
        </div>
      </div>

      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p className="mb-0">
          © {new Date().getFullYear()} React Café. Made with ❤️ and Bootstrap.
        </p>
      </footer>

  </div>
  )
 
}

export default App