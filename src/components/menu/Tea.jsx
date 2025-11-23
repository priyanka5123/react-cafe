// Tea.js
import React, { useState, useEffect } from 'react';

function Tea({addToCart}) {
  const [teaItems, setTeaItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => {
        setTeaItems([
            { 
                name: 'Black Tea', 
                price: 2,
                img: 'https://images.unsplash.com/photo-1627828094454-accc9a7c20e9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjB0ZWF8ZW58MHx8MHx8fDA%3D'
            },
            { 
                name: 'Green Tea', 
                price: 2.5,
                img: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D'
            },
            { 
                name: 'Herbal Tea', 
                price: 3,
                img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVyYmFsJTIwdGVhfGVufDB8fDB8fHww'
            }
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

export default Tea;
