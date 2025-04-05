import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const CarVariants = () => {
  const [variants, setVariants] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCarVariants = async () => {
    const carName = localStorage.getItem("carModel");
    if (!carName) {
      alert("No car name found in localStorage");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5004/get_variants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ car_name: carName }),
      });
      if (!response.ok) throw new Error("Failed to fetch variants");
      const data = await response.json();
      console.log("Fetched Variants Data:", data); // Debugging
      setVariants(data.variants);
    } catch (error) {
      console.error("Error fetching variants:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex min-h-screen bg-black text-white p-6 flex-col items-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg mb-6"
          onClick={fetchCarVariants}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Show Variants"}
        </button>

        <div className="w-full max-w-4xl">
          {variants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {variants.map((variant, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <img src={variant.image} alt={variant.name} className="w-full h-48 object-cover rounded-md" />
                  <h2 className="text-xl font-semibold mt-4">{variant.name}</h2>
                  <p className="text-gray-300">Price: <span className="text-green-400">{variant.price}</span></p>
                  <p className="text-gray-300">Engine: {variant.engine}</p>
                  <p className="text-gray-300">Transmission: {variant.transmission}</p>
                  <p className="text-gray-300">Fuel Economy: {variant.fuel_economy}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">Click the button to fetch car variants.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CarVariants;
