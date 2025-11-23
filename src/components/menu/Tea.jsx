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
    <div className="card shadow-sm mb-4">
        <div className="card-body">
            <h3 className="card-title text-primary">Tea</h3>
            <ul className="list-group">
                {teaItems.map((item, index) => (
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

export default Tea;
