import React from 'react';

function Products() {
  const products = [
    { id: 1, name: 'Class 10 Math Guide', price: 29.99, imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 2, name: 'Class 11 Physics Notes', price: 39.99, imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 3, name: 'Class 12 Chemistry Hardcopy', price: 49.99, imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 4, name: 'Class 10 Science Guide', price: 25.99, imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 5, name: 'Class 11 Biology Notes', price: 35.99, imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 6, name: 'Class 12 English Hardcopy', price: 45.99, imageUrl: 'https://via.placeholder.com/400x300' },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-dark-secondary rounded-lg shadow-md p-4 hover:scale-105 transition duration-300">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-400">${product.price}</p>
            <button className="bg-secondary hover:bg-accent text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
