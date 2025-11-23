// Coffee.js
import React, { useState, useEffect } from 'react';

function Coffee({addToCart}) {
  const [coffeeItems, setCoffeeItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //simulate Fetch
    setTimeout(()=> {
        setCoffeeItems([
            { name: 'Espresso', price: 3, img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348' },
            { name: 'Cappuccino', price: 4, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
            { name: 'Latte', price: 4, img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF0dGV8ZW58MHx8MHx8fDA%3D' }
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
                    <div className="d-flex align-items-center gap-3">
                        <img 
                        src={item.img}
                        alt={item.name}
                        style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
                        />
                        <span>{item.name} - ${item.price.toFixed(2)}</span>
                    </div>
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
