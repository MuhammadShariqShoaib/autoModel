import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import carDataJson from "../Car Identification/carDetails.json"; // Ensure correct path

const CarSpecs = () => {
  const [carData, setCarData] = useState(null);
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const storedCarName = localStorage.getItem("carModel");

    if (storedCarName) {
      const selectedCar = carDataJson.find((car) => car.Model === storedCarName);
      setCarData(selectedCar || null);

      // Dynamically generate image paths
      const images = [1, 2, 3].map(
        (num) => `/Images/${storedCarName}/${num}.jpeg`
      );
      setImagePaths(images);
    }
  }, []);

  if (!carData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p>Loading car details...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex min-h-screen bg-black text-white">
        <div className="bg-gray-900 p-6 flex-1 transition-all duration-300">
          <h1 className="text-3xl font-bold text-gray-100 mb-6">
            {carData.Model} - Specs
          </h1>

          {/* Image Gallery */}
          <div className="flex flex-wrap gap-6 justify-center overflow-x-auto pb-4">
            {imagePaths.map((src, index) => (
              <div key={index} className="w-full sm:w-80 h-52 flex-shrink-0">
                <img
                  src={src}
                  alt={`${carData.Model} Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  onError={(e) => (e.target.style.display = "none")} // Hide if image not found
                />
              </div>
            ))}
          </div>

          {/* Engine & Performance */}
          <section className="bg-gray-800 mt-6 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-white">
              Engine & Performance
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li><strong>Engine:</strong> {carData.Engine}</li>
              <li><strong>Fuel Type:</strong> {carData.FuelType}</li>
              <li><strong>Mileage:</strong> {carData.Mileage}</li>
              <li><strong>Transmission:</strong> {carData.Transmission}</li>
              <li><strong>Horsepower:</strong> {carData.Horsepower}</li>
              <li><strong>Torque:</strong> {carData.Torque}</li>
            </ul>
          </section>

          {/* Exterior & Interior Features */}
          <section className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-white">Exterior & Interior</h2>
            <ul className="text-gray-300 space-y-2">
              <li><strong>Headlights:</strong> {carData.ExteriorInterior.Headlights}</li>
              <li><strong>Infotainment:</strong> {carData.ExteriorInterior.Infotainment}</li>
              <li><strong>Upholstery:</strong> {carData.ExteriorInterior.Upholstery}</li>
              <li><strong>Sunroof:</strong> {carData.ExteriorInterior.Sunroof ? "Yes" : "No"}</li>
            </ul>
          </section>

          {/* Safety & Security Features */}
          <section className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-white">Safety & Security</h2>
            <ul className="text-gray-300 space-y-2">
              <li><strong>Airbags:</strong> {carData.SafetySecurity.Airbags}</li>
              <li><strong>ABS:</strong> {carData.SafetySecurity.ABS}</li>
              <li><strong>Lane Assist:</strong> {carData.SafetySecurity.LaneAssist}</li>
              <li><strong>Rear Camera:</strong> {carData.SafetySecurity.RearCamera ? "Yes" : "No"}</li>
            </ul>
          </section>

          {/* Dimensions & Capacity */}
          <section className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-white">Dimensions & Capacity</h2>
            <ul className="text-gray-300 space-y-2">
              <li><strong>Length:</strong> {carData.DimensionsCapacity.Length} mm</li>
              <li><strong>Width:</strong> {carData.DimensionsCapacity.Width} mm</li>
              <li><strong>Height:</strong> {carData.DimensionsCapacity.Height} mm</li>
              <li><strong>Boot Space:</strong> {carData.DimensionsCapacity.BootSpace} L</li>
            </ul>
          </section>

          {/* Price */}
          <section className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-white">Price</h2>
            <p className="text-xl font-bold text-green-400">{carData.Price}</p>
          </section>

          {/* User Reviews & Ratings */}
          <section className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-white">User Reviews</h2>
            {carData.Reviews && carData.Reviews.length > 0 ? (
              <ul className="text-gray-300 space-y-2">
                {carData.Reviews.map((review, index) => (
                  <li key={index} className="border-b border-gray-700 pb-2">
                    <strong>{review.username}:</strong> {review.comment}
                    <span className="text-yellow-400"> ⭐ {review.rating}/5</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </section>

          {/* Comparison with Similar Models */}
          <section className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-white">Compare with Similar Models</h2>
            {carData.SimilarModels && carData.SimilarModels.length > 0 ? (
              <ul className="text-gray-300 space-y-2">
                {carData.SimilarModels.map((model, index) => (
                  <li key={index}>
                    <strong>{model.name}</strong> - {model.Price}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No similar models listed.</p>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default CarSpecs;
