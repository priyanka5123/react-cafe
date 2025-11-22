// Tea.js
// import React, { useState } from 'react';

function Tea({addToCart}) {
  const teaItems = [
    { name: 'Black Tea', price: 2 },
    { name: 'Green Tea', price: 2.5 },
    { name: 'Herbal Tea', price: 3 }
  ];

  return (
    <div className="menu-category">
      <h3>Tea</h3>
      <ul>
        {teaItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => addToCart(item)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tea;
