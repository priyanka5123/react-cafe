// Cart.js
import React from 'react';

function Cart({ cart, removeFromCart , clearCart}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="card shadow-lg">
      <div className="card-body">
        <h2 className="card-title text-center text-success">Your Cart</h2>
        <hr />

        {cart.length === 0 ? (
          <p className="text-center text-muted">Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cart.map((item, index) => (
                <li 
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    {item.name} - ${item.price.toFixed(2)} 
                    <strong className="text-primary"> (x{item.quantity})</strong>
                  </span>

                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(index)}
                  >
                    -
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-end">
              Total: <span className="text-primary">${total.toFixed(2)}</span>
            </h4>

            <button 
              className="btn btn-outline-danger w-100 mt-3"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );

}

export default Cart;
