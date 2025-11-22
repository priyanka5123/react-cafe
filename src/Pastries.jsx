// Pastries.js
import React, {useEffect, useState} from 'react';

function Pastries({addToCart}) {
  const [pastryItems,setPastryItems] = useState([]) ;
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
        setPastryItems([
            { name: 'Croissant', price: 3 },
            { name: 'Muffin', price: 2.5 },
            { name: 'Chocolate Cake', price: 4 }
        ]);
        setLoading(false);
    },1000);
  }, []);

  if (loading) return <p>Loading pastries menu...</p>;

  return (
    <div className="card shadow-sm mb-4">
        <div className="card-body">
            <h3 className="card-title text-primary">Pastries</h3>
            <ul className="list-group">
                {pastryItems.map((item, index) => (
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

export default Pastries;
