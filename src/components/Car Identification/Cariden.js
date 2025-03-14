
// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import carDetails from "./carDetails.json"; // Import JSON file

// function Cariden() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [carModel, setCarModel] = useState(null);
//   const [carInfo, setCarInfo] = useState(null); // State for car details
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (carModel) {
//       // Find car details in JSON file
//       const carData = carDetails.cars.find(
//         (car) => car.name.toLowerCase() === carModel.toLowerCase()
//       );
//       setCarInfo(carData || null); // Set car details or null if not found
//     }
//   }, [carModel]);

//   const identifyCarModel = async () => {
//     if (!selectedImage) return;

//     setLoading(true);
//     setError(null);

//     const formData = new FormData();
//     formData.append("image", selectedImage);

//     try {
//       const response = await fetch("http://127.0.0.1:5004/identify_car", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to identify the car model");
//       }

//       const data = await response.json();
//       setCarModel(data.model); // Set the detected car model
//     } catch (err) {
//       console.error("Error:", err);
//       setError("Error identifying the car model. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       setSelectedImage(file);
//       setPreviewImage(URL.createObjectURL(file));
//     }
//   };

//   const handleClearSelection = () => {
//     setSelectedImage(null);
//     setPreviewImage(null);
//     setCarModel(null);
//     setCarInfo(null);
//     setError(null);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
//         <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>

//         <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
//           <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-8 text-gray-300">
//             <h2 className="text-2xl font-bold text-center mb-6">
//               Upload Car Image
//             </h2>

//             {previewImage && (
//               <div className="mb-4 flex flex-col items-center">
//                 <img
//                   src={previewImage}
//                   alt="Selected Car"
//                   className="max-w-full h-48 object-cover rounded-lg shadow-md mb-2"
//                 />
//                 <button
//                   onClick={handleClearSelection}
//                   className="text-sm text-red-400 hover:text-red-500 transition"
//                 >
//                   Clear Selection
//                 </button>
//               </div>
//             )}

//             {!previewImage && (
//               <>
//                 <label
//                   htmlFor="carImageUpload"
//                   className="block bg-gradient-to-r from-blue-500 to-green-600 text-white text-lg font-semibold px-6 py-3 rounded-lg cursor-pointer text-center transition-transform transform hover:scale-105 mb-4"
//                 >
//                   Choose Car Image
//                 </label>
//                 <input
//                   type="file"
//                   id="carImageUpload"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//               </>
//             )}

//             {selectedImage && (
//               <button
//                 className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition-transform transform hover:scale-105 mt-4"
//                 onClick={identifyCarModel}
//                 disabled={loading}
//               >
//                 {loading ? "Detecting..." : "Detect Car Model"}
//               </button>
//             )}

//             {error && (
//               <p className="text-red-400 text-sm text-center mt-3">{error}</p>
//             )}
//           </div>

//           <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-8 text-gray-300">
//             <h2 className="text-2xl font-bold text-center mb-6">Car Details</h2>

//             {loading && <p className="text-center">Loading...</p>}
//             {carInfo ? (
//               <>
//                 <h3 className="text-xl font-bold">{carInfo.name}</h3>
//                 <p>Model: {carInfo.model}</p>
//                 <p>Variant: {carInfo.variant}</p>
//                 <p>Price: {carInfo.price}</p>
//                 <p>Engine: {carInfo.specifications.engine}</p>
//                 <p>Fuel Type: {carInfo.specifications.fuel_type}</p>
//                 <p>Mileage: {carInfo.specifications.mileage}</p>
//               </>
//             ) : (
//               <p>No details available for this car.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cariden;
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Pages/Navbar";
import carDetails from "./carDetails.json"; // Import JSON file
import { RingLoader } from "react-spinners";

function Cariden() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [carModel, setCarModel] = useState(null);
  const [carInfo, setCarInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(null);
  const [loadingText, setLoadingText] = useState("Model is thinking...");

  useEffect(() => {
    if (carModel) {
      const carData = carDetails.cars.find(
        (car) => car.name.toLowerCase() === carModel.toLowerCase()
      );
      setTimeout(() => {
        setShowLoader(false);
        setCarInfo(carData || null);
      }, 6000); // Show loader for 6 seconds
    }
  }, [carModel]);

  useEffect(() => {
    if (showLoader) {
      const messages = [
        "Model is thinking...",
        "Wait, model is analyzing...",
        "Almost there...",
      ];
      let index = 0;
      const interval = setInterval(() => {
        setLoadingText(messages[index]);
        index = (index + 1) % messages.length;
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [showLoader]);

  const identifyCarModel = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setShowLoader(true);
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
      setCarModel(data.model);
    } catch (err) {
      console.error("Error:", err);
      setError("Error identifying the car model. Please try again.");
      setShowLoader(false);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleClearSelection = () => {
    setSelectedImage(null);
    setPreviewImage(null);
    setCarModel(null);
    setCarInfo(null);
    setError(null);
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-8 text-gray-300">
            <h2 className="text-2xl font-bold text-center mb-6">Upload Car Image</h2>

            {previewImage && (
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
            )}

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
                {loading ? "Detecting..." : "Detect Car Model"}
              </button>
            )}

            {error && <p className="text-red-400 text-sm text-center mt-3">{error}</p>}
          </div>

          <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-8 text-gray-300 flex flex-col items-center justify-center min-h-[200px]">
            {showLoader ? (
              <>
                <RingLoader color="#36D7B7" size={100} />
                <p className="mt-4 text-lg font-semibold">{loadingText}</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center mb-6">Car Details</h2>
                {carInfo ? (
                  <>
                    <h3 className="text-xl font-bold">{carInfo.name}</h3>
                    <p>Model: {carInfo.model}</p>
                    <p>Variant: {carInfo.variant}</p>
                    <p>Price: {carInfo.price}</p>
                    <p>Engine: {carInfo.specifications.engine}</p>
                    <p>Fuel Type: {carInfo.specifications.fuel_type}</p>
                    <p>Mileage: {carInfo.specifications.mileage}</p>
                  </>
                ) : (
                  <p>No details available for this car.</p>
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
