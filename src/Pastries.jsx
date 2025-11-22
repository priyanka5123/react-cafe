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
