import React, { useState, useEffect } from "react";
import Navbar from "../Pages/Navbar";
import { RingLoader } from "react-spinners";
import carData from "./carDetails.json";
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
import Footer from "../Pages/Footer";

function Cariden() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [carModel, setCarModel] = useState(null);
  const [carInfo, setCarInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedCarModel = localStorage.getItem("carModel");
    if (storedCarModel) {
      setCarModel(storedCarModel);
      fetchDetails(storedCarModel);
      localStorage.removeItem("carModel");
    }
  }, []);

  const [credits, setCredits] = useState(0);
const [showPremiumModal, setShowPremiumModal] = useState(false);

// useEffect(() => {
//   const userId = localStorage.getItem("userId");
//   if (userId) {
//     fetchUserCredits(userId);
//   }
// }, []);

// const fetchUserCredits = async (userId) => {
//   try {
//     console.log('This API Is HIT Fetch User Credit API')
//     const response = await fetch(`http://localhost:5004/user/${userId}`);
//     const data = await response.json();
//     setCredits(data.credits);
//     console.log('Credits in this One', userId ,data.credits);
//   } catch (error) {
//     console.error("Failed to fetch user credits:", error);
//   }
// };

//   const identifyCarModel = async () => {
//     if (!selectedImage) return;
  
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       setError("User not identified.");
//       return;
//     }
  
//     if (credits >= 5) {
//       setShowPremiumModal(true);
//       return;
//     }
  
//     setLoading(true);
//     setError(null);
  
//     const formData = new FormData();
//     formData.append("image", selectedImage);
//     formData.append("userId", userId);
  
//     try {
//       const response = await fetch("http://127.0.0.1:5004/identify_car", {
//         method: "POST",
//         body: formData,
//       });
  
//       if (!response.ok) throw new Error("Failed to identify the car model");
  
//       const data = await response.json();
  
//       if (data?.model) {
//         setCarModel(data.model);
//         localStorage.setItem("carModel", data.model);
//         fetchDetails(data.model);
//         setCredits((prev) => prev + 1); // Update locally
//         updateCreditsOnServer(userId);  // Update server
//       } else {
//         setError("No car model detected. Please try another image.");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setError("Error identifying the car model. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const updateCreditsOnServer = async (userId) => {
//     try {
//       await fetch(`http://localhost:5004/user/${userId}/increment`, {
//         method: "POST",
//       });
//     } catch (err) {
//       console.error("Failed to update credits:", err);
//     }
//   };
  

  // const identifyCarModel = async () => {
  //   if (!selectedImage) return;

  //   setLoading(true);
  //   setError(null);

  //   const formData = new FormData();
  //   formData.append("image", selectedImage);

  //   try {
  //     const response = await fetch("http://127.0.0.1:5004/identify_car", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (!response.ok) throw new Error("Failed to identify the car model");

  //     const data = await response.json();
  //     if (data?.model) {
  //       setCarModel(data.model);
  //       localStorage.setItem("carModel", data.model);
  //       fetchDetails(data.model);
  //     } else {
  //       setError("No car model detected. Please try another image.");
  //     }
  //   } catch (err) {
  //     console.error("Error:", err);
  //     setError("Error identifying the car model. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetchUserCredits(userId);
    }
  }, []);
  
  // Fetch user credits from the server
  const fetchUserCredits = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5004/user/${userId}`);
      const data = await response.json();
      if (data?.credits !== undefined) {
        setCredits(data.credits);
      } else {
        console.error("Failed to fetch credits. Credits are undefined.");
      }
    } catch (error) {
      console.error("Failed to fetch user credits:", error);
    }
  };
  
  // Handle car model identification
  const identifyCarModel = async () => {
    if (!selectedImage) return;
  
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setError("User not identified.");
      return;
    }
  
    // Check if the user has enough credits
    if (credits >= 5) {
      setShowPremiumModal(true);
      return;
    }
  
    setLoading(true);
    setError(null);
  
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("userId", userId);
  
    try {
      const response = await fetch("http://127.0.0.1:5004/identify_car", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) throw new Error("Failed to identify the car model");
  
      const data = await response.json();
  
      if (data?.model) {
        setCarModel(data.model);
        localStorage.setItem("carModel", data.model);
        fetchDetails(data.model); // Assuming this is your function to fetch car details
  
        // Update credits locally and on the server
        setCredits((prev) => prev + 1); // Update locally
        await updateCreditsOnServer(userId); // Update on the server
        fetchUserCredits(userId); // Fetch latest credits from the server
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
  
  // Update credits on the server after a successful identification
  const updateCreditsOnServer = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5004/user/${userId}/increment`, {
        method: "POST",
      });
  
      if (!response.ok) {
        console.error("Failed to update credits on server.");
      }
    } catch (err) {
      console.error("Failed to update credits:", err);
    }
  };
  
  const accuracyData = [
    { epoch: 1, accuracy: 10 },
    { epoch: 2, accuracy: 29 },
    { epoch: 3, accuracy: 38 },
    { epoch: 4, accuracy: 44 },
    { epoch: 5, accuracy: 50 },
    { epoch: 6, accuracy: 62 },
    { epoch: 7, accuracy: 68 },
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
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
      setError(null);
    } else {
      setError("Please select a valid image file.");
    }
  };

  const handleClearSelection = () => {
    setSelectedImage(null);
    setPreviewImage(null);
    setCarModel(null);
    setCarInfo(null);
    setError(null);
    localStorage.removeItem("carModel");
  };

  return (
    <>
    {showPremiumModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
    <div className="bg-white text-gray-800 rounded-2xl p-8 w-[90%] max-w-lg shadow-2xl transform transition-all duration-300 scale-100">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900">Free Credit Limit Reached</h2>
      <p className="text-center text-gray-600 mb-6">
        You've used all 5 free car identifications. Upgrade to premium to unlock unlimited usage.
      </p>
      <div className="flex justify-center gap-4">
        <button
          className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          onClick={() => setShowPremiumModal(false)}
        >
          Close
        </button>
        <Link
          to="/premium"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition"
        >
          Go Premium
        </Link>
      </div>
    </div>
  </div>
)}

  
    <Navbar />
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-10 gap-12">
  
      {/* Chart Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-extrabold text-center text-orange-500 mb-6">
          AI Model Accuracy Over Time
        </h2>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="epoch"
                label={{ value: "Epochs", position: "insideBottom", dy: 10, fill: "white" }}
                stroke="white"
              />
              <YAxis
                domain={[0, 100]}
                label={{ value: "Accuracy (%)", angle: -90, position: "insideLeft", fill: "white" }}
                stroke="white"
              />
              <Tooltip />
              <Line type="monotone" dataKey="accuracy" stroke="#f97316" strokeWidth={3} dot={{ fill: "white" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
  
      <div className="w-full border-t-2 border-gray-500 my-2"></div>
  
      {/* Upload & Details */}
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
                className="block bg-orange-500 text-white text-lg font-semibold px-6 py-3 rounded-lg cursor-pointer text-center transition-transform transform hover:scale-105 mb-4"
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
              className="w-full bg-orange-600 hover:bg-green-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition-transform transform hover:scale-105 mt-4"
              onClick={identifyCarModel}
              disabled={loading}
            >
              {loading ? "Detecting Car Model..." : "Detect Car Model"}
            </button>
          )}
  
          {error && <p className="text-red-400 text-sm text-center mt-3">{error}</p>}
        </div>
  
        {/* Car Info Section */}
        <div className="bg-gray-800 bg-opacity-90 rounded-xl shadow-xl p-6 md:p-8 text-gray-300 flex flex-col items-center justify-center min-h-[300px]">
          {loading ? (
            <>
              <RingLoader color="#36D7B7" size={100} />
              <p className="mt-4 text-lg font-semibold">Analyzing car model...</p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center mb-6">Car Details</h2>
              {carModel ? (
                <>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{carModel}</h3>
                  {!carInfo ? (
                    <button
                      className="mt-4 bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold px-6 py-1 rounded-lg transition-transform transform hover:scale-105"
                      onClick={() => fetchDetails(carModel)}
                      disabled={fetchingDetails}
                    >
                      {fetchingDetails ? "Fetching Details..." : "Show Details"}
                    </button>
                  ) : (
                    <div className="mt-4 text-left space-y-1">
                      <p><strong>Description:</strong> {carInfo.Description || "N/A"}</p>
                      <p><strong>Make:</strong> {carInfo.Make || "N/A"}</p>
                      <p><strong>Variant:</strong> {carInfo.Variant || "N/A"}</p>
                      <p><strong>Engine:</strong> {carInfo.engine || "N/A"}</p>
                      <p><strong>Fuel Type:</strong> {carInfo.FuelType || "N/A"}</p>
                      <p><strong>Mileage:</strong> {carInfo.Mileage || "N/A"}</p>
                      <p><strong>Transmission:</strong> {carInfo.Transmission || "N/A"}</p>
                      <p><strong>Seats:</strong> {carInfo.Seats || "N/A"}</p>
                      <p><strong>Horsepower:</strong> {carInfo.Horsepower || "N/A"}</p>
                      <p><strong>Torque:</strong> {carInfo.Torque || "N/A"}</p>
                      <p><strong>Price:</strong> {carInfo.Price || "N/A"}</p>
                    </div>
                  )}
                  <Link to="/carSpecs" className="block mt-4 text-orange-400 hover:underline text-sm font-semibold">
                    View More Car Specifications →
                  </Link>
                </>
              ) : (
                <p className="text-gray-400 text-center">No details available. Upload an image to get started.</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
    <Footer />
  </>
  
  );
}

export default Cariden;
