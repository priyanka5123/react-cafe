// Pastries.js
import React from 'react';

function Pastries({addToCart}) {
  const pastryItems = [
    { name: 'Croissant', price: 3 },
    { name: 'Muffin', price: 2.5 },
    { name: 'Chocolate Cake', price: 4 }
  ];

  return (
    <div className="menu-category">
      <h3>Pastries</h3>
      <ul>
        {pastryItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => addToCart(item)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pastries;
