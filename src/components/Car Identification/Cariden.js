import React, { useState, useEffect } from "react";
import Navbar from "../Pages/Navbar";
import { RingLoader } from "react-spinners";
import carData from "./carDetails.json"; // Import the local JSON file
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  useUser,
  SignInButton,
  SignedOut,
  SignedIn,
} from "@clerk/clerk-react";
import Footer from "../Pages/Footer";
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
  const accuracyData = [
    { epoch: 1, accuracy: 10 },
    { epoch: 2, accuracy: 29 },
    { epoch: 3, accuracy: 38 },
    { epoch: 4, accuracy: 44 },
    { epoch: 5, accuracy: 50 },
    { epoch: 6, accuracy: 62 },
    { epoch: 7, accuracy:  68},
    { epoch: 8, accuracy: 72 },
    { epoch: 9, accuracy: 75 },
    { epoch: 10, accuracy: 80 },
  ];
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
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-10 gap-12">

        {/* Chart Section */}
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-extrabold text-center text-blue-500 mb-6">
            AI Model Accuracy Over Time
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="epoch"
                  label={{
                    value: "Epochs",
                    position: "insideBottom",
                    dy: 10,
                    fill: "white",
                  }}
                  stroke="white"
                />
                <YAxis
                  domain={[50, 100]}
                  label={{
                    value: "Accuracy (%)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "white",
                  }}
                  stroke="white"
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  dot={{ fill: "white" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="w-full border-t-2 border-gray-500 my-2"></div>


          {/* Upload & Car Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Upload Section */}
          <div className="bg-gray-800 bg-opacity-90 rounded-xl shadow-xl p-6 md:p-8 text-gray-300">
            <h2 className="text-2xl font-bold text-center mb-6">Upload Car Image</h2>
  
            <div className="mb-4 flex flex-col items-center">
              <img
                src={previewImage || "/preview.jpg"}
                alt="Selected Car"
                className="max-w-full h-48 object-cover rounded-lg shadow-md mb-2"
              />
              {previewImage && (
                <button
                  onClick={handleClearSelection}
                  className="text-sm text-red-400 hover:text-red-500 transition"
                >
                  Clear Selection
                </button>
              )}
            </div>
  
            {!previewImage && (
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
          <div className="bg-gray-800 bg-opacity-90 rounded-xl shadow-xl p-6 md:p-8 text-gray-300 flex flex-col items-center justify-center min-h-[300px]">
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
                    <h3 className="text-xl font-bold text-blue-400 mb-2">{carModel}</h3>
                    {!carInfo ? (
                      <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-1 rounded-lg transition-transform transform hover:scale-105"
                        onClick={fetchDetails}
                        disabled={fetchingDetails}
                      >
                        {fetchingDetails ? "Fetching Details..." : "Show Details"}
                      </button>
                    ) : (
                      <div className="mt-4 text-left space-y-1">
                        <p><span className="font-semibold">Description:</span> {carInfo.Description || "N/A"}</p>
                        <p><span className="font-semibold">Make:</span> {carInfo.Make || "N/A"}</p>
                        <p><span className="font-semibold">Variant:</span> {carInfo.Variant || "N/A"}</p>
                        <p><span className="font-semibold">Engine:</span> {carInfo.engine || "N/A"}</p>
                        <p><span className="font-semibold">Fuel Type:</span> {carInfo.FuelType || "N/A"}</p>
                        <p><span className="font-semibold">Mileage:</span> {carInfo.Mileage || "N/A"}</p>
                        <p><span className="font-semibold">Transmission:</span> {carInfo.Transmission || "N/A"}</p>
                        <p><span className="font-semibold">Seats:</span> {carInfo.Seats || "N/A"}</p>
                        <p><span className="font-semibold">Horsepower:</span> {carInfo.Horsepower || "N/A"}</p>
                        <p><span className="font-semibold">Torque:</span> {carInfo.Torque || "N/A"}</p>
                        <p><span className="font-semibold">Price:</span> {carInfo.Price || "N/A"}</p>
                      </div>
                    )}
                    <Link
                      to="/carSpecs"
                      className="block mt-4 text-blue-400 hover:underline text-sm font-semibold"
                    >
                      View More Car Specifications →
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
      <Footer/>
    </>
  );
  
  
}

export default Cariden;
