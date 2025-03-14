import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Cariden() {
  return (
    <div
      className="relative min-h-screen bg-gray-900 text-white"
      style={{ backgroundImage: "url('/landing.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12">
        {/* Heading Section */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 text-center">
          Car Identification
        </h1>

        {/* Upload Card */}
        <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-lg text-gray-300">
          <p className="text-lg text-center font-medium mb-6">
            Upload an image of a car to identify its make, model, and variant.
          </p>

          {/* Upload Button */}
          <label
            htmlFor="carImageUpload"
            className="block bg-gradient-to-r from-blue-500 to-green-600 text-white text-lg font-semibold px-6 py-3 rounded-lg cursor-pointer text-center transition-transform transform hover:scale-105 mb-4"
          >
            Choose Car Image
          </label>
          <input
            type="file"
            id="carImageUpload"
            className="hidden"
            accept="image/*"
          />

          {/* Placeholder or Instructions */}
          <p className="text-sm text-center text-gray-400">
            Supported formats: JPG, PNG. Max size: 5MB.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cariden;
