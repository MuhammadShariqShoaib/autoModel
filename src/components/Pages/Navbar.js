import React, { useEffect, useState } from 'react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser
} from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user } = useUser();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    if (user) {
      const userId = user.id;
      const username = user.fullName || user.username || 'Unknown User';
      const email = user.primaryEmailAddress?.emailAddress;

      localStorage.setItem('userId', userId);

      // Register user
      const registerUser = async () => {
        try {
          await fetch('http://localhost:5004/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, username, email })
          });
        } catch (error) {
          console.error('Failed to register user:', error);
        }
      };

      // Fetch credits
      const fetchCredits = async () => {
        try {
          const res = await fetch(`http://localhost:5004/user/${userId}`);
          const data = await res.json();
          if (res.ok) {
            setCredits(data.credits);
          } else {
            console.error('Failed to fetch credits:', data.error);
          }
        } catch (error) {
          console.error('Error fetching credits:', error);
        }
      };

      registerUser();
      fetchCredits();
    }
  }, [user]);

  return (
    <nav className="bg-gray-950 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="AutoModel Insight Logo"
              className="w-10 h-10"
            />
            <span className="text-white text-xl font-bold">AutoModel Insight</span>
          </Link>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center space-x-4">
          {credits !== null && (
            <div className="text-sm text-white bg-orange-800 px-3 py-1 rounded-lg">
              Credits: <span className="font-bold text-green-400">{credits}</span>
            </div>
          )}

          <Link
            to="/feedback"
            className="bg-orange-500 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Feedback
          </Link>

          <Link
            to="/premium"
            className="bg-yellow-500 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-yellow-600 transition"
          >
            Upgrade
          </Link>

          <SignedIn>
            <div className="w-10 h-10 flex items-center justify-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-white px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium">
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
