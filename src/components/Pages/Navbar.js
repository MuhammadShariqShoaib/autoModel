import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-950 z-100 p-4 ">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
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
        </Link>
        <div className="flex items-center space-x-4">
          {/* <button className="text-white px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
            Home
          </button>
          <button className="text-white px-4 py-2 bg-green-500 hover:bg-green-600 rounded">
            Features
          </button>
          <button className="text-white px-4 py-2 bg-red-500 hover:bg-red-600 rounded">
            Contact
          </button> */}

          {/* Show User Profile & Sign Out when signed in */}
          <div className='w-12 h-12  p-2 hover:opacity-80 transition-opacity'>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            
          </SignedIn>
        </div>

          {/* Show Sign In button when signed out */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-white px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
