// Coffee.js
import React from 'react';

function Coffee({addToCart}) {
  const coffeeItems = [
    { name: 'Espresso', price: 3 },
    { name: 'Cappuccino', price: 4 },
    { name: 'Latte', price: 4 }
  ];

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
