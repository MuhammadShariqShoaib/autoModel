import React from 'react';

const ProgressPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      {/* Background Animation Section */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,cars')" }}>
      </div>

      <div className="relative text-center">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-6">Work In Progress</h1>
        
        {/* Animated Image or Loader */}
        <div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img
            src="progress.jpg"
            alt="Progress Animation"
            className="rounded-full border-4 border-blue-500 shadow-lg mx-auto"
          />
        </div>

        {/* Progress Text */}
        <p className="text-lg mt-6">
          We are diligently working to bring you the best experience. Please check back later for updates.
        </p>

        {/* Get Started Button */}
        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ProgressPage;
