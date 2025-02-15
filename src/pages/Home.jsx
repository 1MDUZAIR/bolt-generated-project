import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Home() {
  return (
    <Transition in={true} appear={true} timeout={duration}>
      {state => (
        <div className="container mx-auto" style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          {/* Hero Section */}
          <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6 text-gold">Unlock Your Academic Potential</h1>
                <p className="text-lg mb-8">
                  Find the best study materials for classes 10, 11, and 12. Ace your exams with our comprehensive notes, guides, and hard copies.
                </p>
                <button className="bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-full transition duration-300">
                  Explore Study Materials
                </button>
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Students Studying"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Featured Products Section */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sample Product Card */}
              <div className="bg-dark-secondary rounded-lg shadow-md p-4 hover:scale-105 transition duration-300">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Product"
                  className="rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Class 10 Math Guide</h3>
                <p className="text-gray-400">$29.99</p>
                <button className="bg-secondary hover:bg-accent text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300">
                  Add to Cart
                </button>
              </div>
              {/* Add more product cards here */}
              <div className="bg-dark-secondary rounded-lg shadow-md p-4 hover:scale-105 transition duration-300">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Product"
                  className="rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Class 11 Physics Notes</h3>
                <p className="text-gray-400">$39.99</p>
                <button className="bg-secondary hover:bg-accent text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300">
                  Add to Cart
                </button>
              </div>
              <div className="bg-dark-secondary rounded-lg shadow-md p-4 hover:scale-105 transition duration-300">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Product"
                  className="rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Class 12 Chemistry Hardcopy</h3>
                <p className="text-gray-400">$49.99</p>
                <button className="bg-secondary hover:bg-accent text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-6">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sample Testimonial Card */}
              <div className="bg-dark-secondary rounded-lg shadow-md p-6">
                <p className="text-gray-400 italic mb-4">
                  "The study materials were incredibly helpful and well-organized. I was able to ace my exams thanks to StudyMaterial!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50x50"
                    alt="Student"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">Class 10 Student</p>
                  </div>
                </div>
              </div>
              {/* Add more testimonial cards here */}
              <div className="bg-dark-secondary rounded-lg shadow-md p-6">
                <p className="text-gray-400 italic mb-4">
                  "I found the perfect notes for my class 12 physics exam. The quality and detail are unmatched!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50x50"
                    alt="Student"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">Jane Smith</p>
                    <p className="text-sm text-gray-500">Class 12 Student</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </Transition>
  );
}

export default Home;
