// Pastries.js
import React, {useEffect, useState} from 'react';

function Pastries({addToCart}) {
  const [pastryItems,setPastryItems] = useState([]) ;
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
        setPastryItems([
            { name: 'Croissant', price: 3, img: 'https://plus.unsplash.com/premium_photo-1661743823829-326b78143b30?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JvaXNzYW50fGVufDB8fDB8fHww' },
            { name: 'Muffin', price: 2.5 ,img: 'https://images.unsplash.com/photo-1585665187093-a3511c2fe57a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVmZmluc3xlbnwwfHwwfHx8MA%3D%3D'},
            { name: 'Chocolate Cake', price: 4,img: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D' }
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

export default Pastries;
