buimport React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  // Dummy product data
  const product = {
    id: id,
    name: 'Class 10 Math Guide',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/600x400',
    description: 'A comprehensive guide for Class 10 Mathematics, covering all topics with detailed explanations and practice questions.',
    reviews: [
      { id: 1, author: 'John Doe', rating: 5, comment: 'Excellent guide! Very helpful for my studies.' },
      { id: 2, author: 'Jane Smith', rating: 4, comment: 'Good content, but could use more examples.' },
    ],
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitReview = () => {
    // Handle review submission logic here
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    // You can send the rating and comment to a backend server to store the review
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-400 mb-4">${product.price}</p>
          <p className="mb-6">{product.description}</p>
          <button className="bg-secondary hover:bg-accent text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Add to Cart
          </button>

          {/* Reviews Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            {product.reviews.map(review => (
              <div key={review.id} className="bg-dark-secondary rounded-lg shadow-md p-4 mb-4">
                <div className="flex items-center mb-2">
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-gray-500 ml-2">Rating: {review.rating}/5</p>
                </div>
                <p className="text-gray-400">{review.comment}</p>
              </div>
            ))}
          </div>

          {/* Add Review Form */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Add a Review</h2>
            <div>
              <label htmlFor="rating" className="block text-gray-400 text-sm font-bold mb-2">
                Rating:
              </label>
              <select
                id="rating"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-dark-secondary text-white"
                value={rating}
                onChange={handleRatingChange}
              >
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="comment" className="block text-gray-400 text-sm font-bold mb-2">
                Comment:
              </label>
              <textarea
                id="comment"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-dark-secondary text-white"
                rows="4"
                value={comment}
                onChange={handleCommentChange}
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded-full transition duration-300"
                onClick={handleSubmitReview}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
