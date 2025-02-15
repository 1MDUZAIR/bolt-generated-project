import React from 'react';

function Cart() {
  // Dummy cart data
  const cartItems = [
    { id: 1, name: 'Class 10 Math Guide', price: 29.99, quantity: 2 },
    { id: 2, name: 'Class 11 Physics Notes', price: 39.99, quantity: 1 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="bg-dark-secondary rounded-lg shadow-md p-4 mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-400">Price: ${item.price}</p>
                <p className="text-gray-400">Quantity: {item.quantity}</p>
              </div>
              <div>
                <button className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right">
            <h2 className="text-2xl font-bold mb-4">Total: ${calculateTotal()}</h2>
            <button className="bg-secondary hover:bg-accent text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
