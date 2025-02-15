import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark-secondary dark:bg-dark-secondary text-white py-6 mt-12">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} StudyMaterial. All rights reserved.</p>
        <p className="mt-2">
          <a href="/terms" className="text-gray-400 hover:text-gold transition duration-300">Terms of Service</a> |
          <a href="/privacy" className="text-gray-400 hover:text-gold transition duration-300">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
