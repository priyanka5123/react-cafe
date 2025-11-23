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
    <div className="card shadow-sm mb-4">
        <div className="card-body">
            <h3 className="card-title text-primary">Coffee</h3>
            <ul className="list-group">
                {coffeeItems.map((item, index) => (
                <li 
                    key={index} 
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <span>{item.name} - ${item.price.toFixed(2)}</span>
                    <button 
                    className="btn btn-sm btn-success"
                    onClick={() => addToCart(item)}
                    >
                    Add
                    </button>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default Coffee;
