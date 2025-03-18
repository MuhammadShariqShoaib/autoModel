import { useState } from "react";
import { FaCar, FaBalanceScale, FaListAlt, FaDollarSign, FaBars, FaTimes } from "react-icons/fa";

const CarDetails = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen ${isOpen ? "w-64" : "w-16"} bg-gray-900 text-white transition-all duration-300 fixed left-0 top-0 flex flex-col p-4`}>
      <button
        className="text-xl self-end mb-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className="flex flex-col gap-6">
        <a href="/carSpecs" className="flex items-center gap-3 text-lg hover:text-gray-400">
          <FaCar /> {isOpen && "Car Specs"}
        </a>
        <a href="#comparison" className="flex items-center gap-3 text-lg hover:text-gray-400">
          <FaBalanceScale /> {isOpen && "Car Comparison"}
        </a>
        <a href="#variants" className="flex items-center gap-3 text-lg hover:text-gray-400">
          <FaListAlt /> {isOpen && "Car Variants"}
        </a>
        <a href="#pricing" className="flex items-center gap-3 text-lg hover:text-gray-400">
          <FaDollarSign /> {isOpen && "Car Pricing"}
        </a>
      </nav>
    </div>
  );
};

export default CarDetails;
