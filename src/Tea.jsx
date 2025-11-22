// Tea.js
import React, { useState, useEffect } from 'react';

function Tea({addToCart}) {
  const [teaItems, setTeaItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => {
        setTeaItems([
            { name: 'Black Tea', price: 2 },
            { name: 'Green Tea', price: 2.5 },
            { name: 'Herbal Tea', price: 3 }
        ]);
        setLoading(false);
    },1000);
  },[]); // ⚠️ runs once when component loads

  if (loading) return <p>Loading tea menu...</p>;

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
