import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser, SignInButton, SignedOut, SignedIn } from '@clerk/clerk-react';

const InfoPage = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isSignedIn) {
      navigate('/Get-Started');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-800 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/landing.jpg')" }}
    >
      <div className="bg-gray-900 bg-opacity-75 min-h-screen">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold mb-4">AutoModel Insight</h1>
          <p className="text-lg">Revolutionizing car identification with cutting-edge technology.</p>
        </header>

               {/* Information Cards Section */}
               <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
          {/* Card 1 */}
          <div className="bg-yellow-400 text-black p-4 rounded-lg shadow-md transform rotate-2">
            <h2 className="text-2xl font-bold mb-2">Why AutoModel Insight?</h2>
            <p>
              AutoModel Insight provides instant identification of car make, model, and variant with a simple photo.
              It's fast, reliable, and user-friendly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-400 text-black p-4 rounded-lg shadow-md transform -rotate-1">
            <h2 className="text-2xl font-bold mb-2">How It Works?</h2>
            <p>
              Using advanced image recognition and machine learning algorithms, we detect car details and display a
              3D model for customization.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-green-400 text-black p-4 rounded-lg shadow-md transform rotate-3">
            <h2 className="text-2xl font-bold mb-2">What Makes Us Different?</h2>
            <p>
              Our platform doesn’t just identify cars; it also provides detailed information about the car’s features.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-pink-400 text-black p-4 rounded-lg shadow-md transform -rotate-2">
            <h2 className="text-2xl font-bold mb-2">Our Features</h2>
            <ul className="list-disc pl-5">
              <li>3D car model visualization</li>
              <li>Car condition analysis</li>
              <li>Customizable car configurations</li>
              <li>Focused on Suzuki Pakistan cars</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="bg-orange-400 text-black p-4 rounded-lg shadow-md transform rotate-1">
            <h2 className="text-2xl font-bold mb-2">Who Can Use It?</h2>
            <p>
              Auto dealers, car enthusiasts, and anyone looking for detailed car insights can benefit from our
              platform.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-purple-400 text-black p-4 rounded-lg shadow-md transform -rotate-3">
            <h2 className="text-2xl font-bold mb-2">Future Vision</h2>
            <p>
              We aim to expand our database to include all car manufacturers globally and integrate AI-driven insights
              for our user.
            </p>
          </div>
        </main>

        <footer className="text-center py-8 mt-12">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-2 rounded-lg m-2 shadow-md">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <button
              onClick={handleGetStarted}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg m-2 shadow-md"
            >
              Get Started
            </button>
          </SignedIn>
        </footer>
      </div>
    </div>
  );
};

export default InfoPage;
