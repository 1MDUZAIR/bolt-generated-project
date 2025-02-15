import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="bg-dark-secondary dark:bg-dark-secondary text-white py-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-gold">StudyMaterial</Link>
        <nav>
          <ul className="flex space-x-8 items-center">
            <li><Link to="/" className="hover:text-gold transition duration-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-gold transition duration-300">Products</Link></li>
            <li><Link to="/cart" className="hover:text-gold transition duration-300">Cart</Link></li>
            <li>
              <button onClick={toggleDarkMode} className="hover:text-gold transition duration-300">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
