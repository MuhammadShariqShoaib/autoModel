import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Cariden() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/landing.jpg')", // Replace with the correct path to your image
        }}
      >
        {/* Heading Section */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center font-poppins">
          Car Identification
        </h1>

        {/* Upload Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg text-gray-800">
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
          <p className="text-sm text-center text-gray-600">
            Supported formats: JPG, PNG. Max size: 5MB.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cariden;
