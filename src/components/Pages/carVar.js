import React, { useState, useEffect } from "react";
import { FaCar } from "react-icons/fa";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

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
      setVariants(data.variants);
    } catch (error) {
      console.error("Error fetching variants:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCarVariants();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-6 flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-8 tracking-wide">Car Variants</h1>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-opacity-50"></div>
          </div>
        ) : variants.length > 0 ? (
          <motion.div
            className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {variants.map((variant, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <FaCar className="text-orange-400 text-3xl" />
                  <div>
                    <h2 className="text-xl font-semibold">{variant.name}</h2>
                    <p className="text-gray-400">Engine: {variant.engine}</p>
                    <p className="text-gray-400">Transmission: {variant.transmission}</p>
                    <p className="text-gray-400">Fuel Economy: {variant.fuel_economy}</p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="text-green-400 text-lg font-bold">{variant.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center">
            <p className="text-gray-300 text-lg animate-pulse">Fetching car variants...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CarVariants;
