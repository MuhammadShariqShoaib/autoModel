import { useState } from "react";

const AutoModel = () => {
  const [car, setCar] = useState(null); // State for car details

  // Placeholder for car details (can be fetched from API)
  const carDetails = {
    make: "3",
    model: "D",
    variant: "Model",
    imageUrl: "/path/to/car-image.jpg", // Use the identified car image
    gifUrl: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnhnemh6bWxiYmF1czdwMTExN2N0dzVpbjRwNW4xMTdjdDdqdnV2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MgQDiH1UjsW25PFiyb/giphy.gif", // GIF for car customization
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex justify-center md:justify-start mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900">
              {carDetails.make} {carDetails.model}
            </h1>
            <p className="text-xl text-gray-700 mt-2">{carDetails.variant}</p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between space-y-6 md:space-y-0">
          {/* Car Image */}
          {/* <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={carDetails.imageUrl}
              alt={`${carDetails.make} ${carDetails.model}`}
              className="rounded-lg shadow-lg w-full md:w-96"
            />
          </div> */}

          {/* Customization GIF */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={carDetails.gifUrl}
                alt="Car Customization"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Customization Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => alert("Customize your car model!")}
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
          >
            Customize Model
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoModel;
