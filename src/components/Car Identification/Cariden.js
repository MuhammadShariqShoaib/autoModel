import React, { useState, useEffect } from "react";
import Navbar from "../Pages/Navbar";
import { RingLoader } from "react-spinners";
import carData from "./carDetails.json"; // Import the local JSON file
import { Link } from "react-router-dom";

function Cariden() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [carModel, setCarModel] = useState(null);
  const [carInfo, setCarInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [error, setError] = useState(null);
  const [loadingText, setLoadingText] = useState("Analyzing car model...");

  useEffect(() => {
    // Retrieve car model from localStorage on component mount
    const storedCarModel = localStorage.getItem("carModel");
    if (storedCarModel) {
      setCarModel(storedCarModel);
      fetchDetails(storedCarModel);
    }
  }, []);

  const identifyCarModel = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch("http://127.0.0.1:5004/identify_car", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to identify the car model");
      }

      const data = await response.json();
      if (data?.model) {
        setCarModel(data.model);
        localStorage.setItem("carModel", data.model); // Save detected car model in localStorage
        fetchDetails(data.model);
      } else {
        setError("No car model detected. Please try another image.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Error identifying the car model. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchDetails = (model) => {
    setFetchingDetails(true);
    setError(null);

    setTimeout(() => {
      const foundCar = carData.find((car) => car.Model === model);
      if (foundCar) {
        setCarInfo(foundCar);
      } else {
        setCarInfo(null);
        setError("No details found for this car.");
      }
      setFetchingDetails(false);
    }, 2000);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file.");
        return;
      }
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleClearSelection = () => {
    setSelectedImage(null);
    setPreviewImage(null);
    setCarModel(null);
    setCarInfo(null);
    setError(null);
    localStorage.removeItem("carModel"); // Clear stored car model
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Upload Section */}
          <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-8 text-gray-300">
            <h2 className="text-2xl font-bold text-center mb-6">Upload Car Image</h2>

            {previewImage ? (
              <div className="mb-4 flex flex-col items-center">
                <img
                  src={previewImage}
                  alt="Selected Car"
                  className="max-w-full h-48 object-cover rounded-lg shadow-md mb-2"
                />
                <button
                  onClick={handleClearSelection}
                  className="text-sm text-red-400 hover:text-red-500 transition"
                >
                  Clear Selection
                </button>
              </div>
            ) : (
              <>
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
                  onChange={handleImageChange}
                />
              </>
            )}

            {selectedImage && (
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition-transform transform hover:scale-105 mt-4"
                onClick={identifyCarModel}
                disabled={loading}
              >
                {loading ? "Detecting Car Model..." : "Detect Car Model"}
              </button>
            )}

            {error && <p className="text-red-400 text-sm text-center mt-3">{error}</p>}
          </div>

          {/* Car Details Section */}
          <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-8 text-gray-300 flex flex-col items-center justify-center min-h-[200px]">
            {loading ? (
              <>
                <RingLoader color="#36D7B7" size={100} />
                <p className="mt-4 text-lg font-semibold">{loadingText}</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center mb-6">Car Details</h2>
                {carModel ? (
                  <>
                    <h3 className="text-xl font-bold">{carModel}</h3>
                    {!carInfo ? (
                      <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-1 rounded-lg transition-transform transform hover:scale-105"
                        onClick={fetchDetails}
                        disabled={fetchingDetails}
                      >
                        {fetchingDetails ? "Fetching Details..." : "Show Details"}
                      </button>
                    ) : (
                      <div className="mt-4 text-left">
                        <p>Description: {carInfo.Description || "N/A"}</p>
                        <p>Make: {carInfo.Make || "N/A"}</p>
                        <p>Variant: {carInfo.Variant || "N/A"}</p>
                        <p>Engine: {carInfo.engine || "N/A"}</p>
                        <p>FuelType: {carInfo.FuelType || "N/A"}</p>
                        <p>Mileage: {carInfo.Mileage || "N/A"}</p>
                        <p>Transmission: {carInfo.Transmission || "N/A"}</p>
                        <p>Seats: {carInfo.Seats || "N/A"}</p>
                        <p>Horsepower: {carInfo.Horsepower || "N/A"}</p>
                        <p>Torque: {carInfo.Torque || "N/A"}</p>
                        <p>Price: {carInfo.Price || "N/A"}</p>
                      </div>
                    )}

<Link
                      to="/carSpecs"
                      className="text-red-900 hover:text-red font-bold border-b-2 border-transparent hover:border-red-900 transition duration-300"
                    >
                      Click here to see Car Details....
                    </Link>
                  </>
                ) : (
                  <p className="text-gray-400 text-center">
                    No details available. Upload an image to get started.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cariden;

// [
//   {
//     "Model": "Honda Vezell",
//     "Make": "Honda",
//     "Variant": "Hybrid Z",
//     "Price": "PKR 4,500,000",
//     "Engine": "1.5L Hybrid i-VTEC",
//     "FuelType": "Hybrid",
//     "Mileage": "20 km/l",
//     "Transmission": "Automatic",
//     "Seats": 5,
//     "Horsepower": "130 HP",
//     "Torque": "155 Nm",
//     "Description": "A hybrid crossover with fuel efficiency, a modern design, and advanced safety features."
//   },
//   {
//     "Model": "Honda BRV",
//     "Make": "Honda",
//     "Variant": "i-VTEC S",
//     "Price": "PKR 4,200,000",
//     "Engine": "1.5L i-VTEC",
//     "FuelType": "Petrol",
//     "Mileage": "16 km/l",
//     "Transmission": "CVT",
//     "Seats": 7,
//     "Horsepower": "118 HP",
//     "Torque": "145 Nm",
//     "Description": "A spacious 7-seater SUV with a powerful engine, excellent road grip, and great ground clearance."
//   },
//   {
//     "Model": "Suzuki Alto",
//     "Make": "Suzuki",
//     "Variant": "VXR",
//     "Price": "PKR 2,200,000",
//     "Engine": "660cc R06A",
//     "FuelType": "Petrol",
//     "Mileage": "22 km/l",
//     "Transmission": "Manual",
//     "Seats": 4,
//     "Horsepower": "39 HP",
//     "Torque": "56 Nm",
//     "Description": "A compact city car with excellent fuel efficiency and an economical price."
//   },
//   {
//     "Model": "Toyota Corolla",
//     "Make": "Toyota",
//     "Variant": "Altis Grande 1.8",
//     "Price": "PKR 6,200,000",
//     "Engine": "1.8L Dual VVT-i",
//     "FuelType": "Petrol",
//     "Mileage": "14 km/l",
//     "Transmission": "Automatic",
//     "Seats": 5,
//     "Horsepower": "138 HP",
//     "Torque": "173 Nm",
//     "Description": "A reliable sedan with high resale value, smooth driving experience, and modern safety features."
//   },
//   {
//     "Model": "Suzuki Cultus",
//     "Make": "Suzuki",
//     "Variant": "VXL Auto",
//     "Price": "PKR 3,500,000",
//     "Engine": "1.0L K10B",
//     "FuelType": "Petrol",
//     "Mileage": "18 km/l",
//     "Transmission": "Automatic",
//     "Seats": 5,
//     "Horsepower": "67 HP",
//     "Torque": "90 Nm",
//     "Description": "A fuel-efficient hatchback with a comfortable interior, modern infotainment, and safety features."
//   },
//   {
//     "Model": "Toyota Fortuner",
//     "Make": "Toyota",
//     "Variant": "Legender 2.8L",
//     "Price": "PKR 15,500,000",
//     "Engine": "2.8L Diesel Turbo",
//     "FuelType": "Diesel",
//     "Mileage": "12 km/l",
//     "Transmission": "Automatic",
//     "Seats": 7,
//     "Horsepower": "201 HP",
//     "Torque": "500 Nm",
//     "Description": "A luxury SUV with off-road capabilities, a premium interior, and a powerful diesel engine."
//   },
//   {
//     "Model": "Toyota Aqua",
//     "Make": "Toyota",
//     "Variant": "S",
//     "Price": "PKR 4,000,000",
//     "Engine": "1.5L Hybrid",
//     "FuelType": "Hybrid",
//     "Mileage": "25 km/l",
//     "Transmission": "Automatic",
//     "Seats": 5,
//     "Horsepower": "99 HP",
//     "Torque": "120 Nm",
//     "Description": "A fuel-efficient hybrid hatchback with eco-friendly technology and smart driving features."
//   },
//   {
//     "Model": "Toyota Landcruser",
//     "Make": "Toyota",
//     "Variant": "ZX",
//     "Price": "PKR 40,000,000",
//     "Engine": "3.5L V6 Twin-Turbo",
//     "FuelType": "Petrol",
//     "Mileage": "10 km/l",
//     "Transmission": "Automatic",
//     "Seats": 7,
//     "Horsepower": "409 HP",
//     "Torque": "650 Nm",
//     "Description": "A premium full-size SUV with exceptional off-road performance and luxury features."
//   },
//   {
//     "Model": "Honda Civic",
//     "Make": "Honda",
//     "Variant": "Oriel 1.8L",
//     "Price": "PKR 8,000,000",
//     "Engine": "1.8L i-VTEC",
//     "FuelType": "Petrol",
//     "Mileage": "12 km/l",
//     "Transmission": "Automatic",
//     "Seats": 5,
//     "Horsepower": "138 HP",
//     "Torque": "174 Nm",
//     "Description": "A stylish and fuel-efficient sedan known for its reliability and advanced safety features."
//   },
//   {
//     "Model": "KIA Sportage",
//     "Make": "KIA",
//     "Variant": "AWD",
//     "Price": "PKR 9,000,000",
//     "Engine": "2.0L MPI",
//     "FuelType": "Petrol",
//     "Mileage": "10 km/l",
//     "Transmission": "Automatic",
//     "Seats": 5,
//     "Horsepower": "155 HP",
//     "Torque": "196 Nm",
//     "Description": "A modern compact SUV with advanced features, spacious interior, and an all-wheel-drive option."
//   },
//   {
//     "Model": "Suzuki Khyber",
//     "Make": "Suzuki",
//     "Variant": "GA",
//     "Price": "PKR 350,000",
//     "Engine": "1.0L Carburetor",
//     "FuelType": "Petrol",
//     "Mileage": "14 km/l",
//     "Transmission": "Manual",
//     "Seats": 5,
//     "Horsepower": "55 HP",
//     "Torque": "78 Nm",
//     "Description": "A classic hatchback known for its affordability, fuel efficiency, and easy maintenance."
//   },
//   {
//     "Model": "Suzuki Mehran",
//     "Make": "Suzuki",
//     "Variant": "VX",
//     "Price": "PKR 800,000",
//     "Engine": "0.8L Carburetor",
//     "FuelType": "Petrol",
//     "Mileage": "16 km/l",
//     "Transmission": "Manual",
//     "Seats": 5,
//     "Horsepower": "39 HP",
//     "Torque": "59 Nm",
//     "Description": "A budget-friendly hatchback with excellent fuel economy, ideal for daily city commuting."
//   },
//   {
//     "Model": "Toyota Prius",
//     "Make": "Toyota",
//     "Variant": "Hybrid",
//     "Price": "PKR 12,000,000",
//     "Engine": "1.8L Hybrid Synergy Drive",
//     "FuelType": "Hybrid",
//     "Mileage": "22 km/l",
//     "Transmission": "Automatic",
//     "Seats": 5,
//     "Horsepower": "121 HP",
//     "Torque": "142 Nm",
//     "Description": "A popular hybrid vehicle with outstanding fuel efficiency, eco-friendly features, and a comfortable ride."
//   }
// ]
