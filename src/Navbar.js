import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 z-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="AutoModel Insight Logo" 
            className="w-12 h-12" 
          />
          <div className="text-white text-lg font-bold">
            AutoModel Insight
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="text-white px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
            Home
          </button>
          <button className="text-white px-4 py-2 bg-green-500 hover:bg-green-600 rounded">
            Features
          </button>
          <button className="text-white px-4 py-2 bg-red-500 hover:bg-red-600 rounded">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
