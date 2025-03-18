import React, { useState } from "react";
import { FaCar, FaBalanceScale, FaListAlt, FaDollarSign, FaBars, FaTimes } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const variants = [
    {
      name: "Suzuki Alto 2005",
      image: "/alto2005.jpeg",
      price: "PKR 800,000",
      engine: "1000cc Inline-4",
      transmission: "5-Speed Manual",
      fuelEconomy: "15 km/l",
    },
    {
      name: "Suzuki Alto 2010",
      image: "/alto2010.jpg",
      price: "PKR 1,200,000",
      engine: "1000cc Inline-4",
      transmission: "4-Speed Automatic",
      fuelEconomy: "16 km/l",
    },
    {
      name: "Suzuki Alto 2015",
      image: "/alto2015.jpeg",
      price: "PKR 1,600,000",
      engine: "660cc R06A Inline-3",
      transmission: "CVT Automatic",
      fuelEconomy: "22 km/l",
    },
    {
      name: "Suzuki Alto 2020",
      image: "/Alto.jpg",
      price: "PKR 2,200,000",
      engine: "660cc R06A Inline-3",
      transmission: "AGS Automatic",
      fuelEconomy: "24 km/l",
    },
];

const CarVariants = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Navbar />
       <Sidebar/>
      <div className="flex min-h-screen bg-black text-white ">
        {/* Sidebar Navigation */}

        {/* Main Content */}
        <div className={`bg-gray-900 p-6 flex-1  transition-all duration-300`}>
          <h1 className="text-3xl font-bold text-gray-100 mb-6">Suzuki Alto Variants</h1>
          
          {/* Variant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {variants.map((variant, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <img src={variant.image} alt={variant.name} className="w-full h-48 object-cover rounded-md" />
                <h2 className="text-xl font-semibold mt-4">{variant.name}</h2>
                <p className="text-gray-300">Price: <span className="text-green-400">{variant.price}</span></p>
                <p className="text-gray-300">Engine: {variant.engine}</p>
                <p className="text-gray-300">Transmission: {variant.transmission}</p>
                <p className="text-gray-300">Fuel Economy: {variant.fuelEconomy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarVariants;
