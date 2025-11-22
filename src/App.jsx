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
  // Why ...cart?
  // Because React state must not be changed directly.
  // Instead of pushing, you create a new array with existing items plus the new one.
  const addToCart = (item) => setCart([...cart, item]);
  // Here:filter creates a new array all items except the one at that index remain
  // React re-renders with updated cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h2>Welcome to React Café</h2>
      <div className='menu-board'>
        <Coffee addToCart={addToCart}/>
        <Tea addToCart={addToCart}/>
        <Pastries addToCart={addToCart}/>
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />

    </div>
  )
 
}

export default App