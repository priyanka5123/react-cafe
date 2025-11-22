// Coffee.js
import React, { useState, useEffect } from 'react';

function Coffee({addToCart}) {
  const [coffeeItems, setCoffeeItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //simulate Fetch
    setTimeout(()=> {
        setCoffeeItems([
            { name: 'Espresso', price: 3 },
            { name: 'Cappuccino', price: 4 },
            { name: 'Latte', price: 4 }
        ]);
        setLoading(false);
    },1000);
  }, []); // runs once when component Loads

  if (loading) return <p>Loading coffee menu...</p>;


  return (
    <div className="menu-category">
      <h3>Coffee</h3>
      <ul>
        {coffeeItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => addToCart(item)}>Add</button>
          </li>
        ))}
      </ul>      
    </div>
  );
}

export default Coffee;
