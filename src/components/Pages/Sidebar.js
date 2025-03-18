import React, { useState } from "react";
import { FaCar, FaBalanceScale, FaListAlt, FaDollarSign, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`w-full ${isOpen ? "h-20" : "h-12"} pb-28 lg:pb-2 bg-gray-950 text-white transition-all duration-300  flex flex-col p-4 shadow-lg border-b border-gray-700`}>
      <button className="text-xl self-end mb-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <nav className="flex justify-center gap-6">
          <a href="/CarSpecs" className="flex items-center gap-2 text-lg hover:text-gray-400">
            <FaCar /> Car Specs
          </a>
          <Link to="/CarComparison" className="flex items-center gap-2 text-lg hover:text-gray-400">
            <FaBalanceScale /> Car Comparison
          </Link>
          <a href="/CarVariants" className="flex items-center gap-2 text-lg hover:text-gray-400">
            <FaListAlt /> Car Variants
          </a>
          <a href="/AutoModel" className="flex items-center gap-2 text-lg hover:text-gray-400">
            <FaDollarSign />Genrate 3D Model
          </a>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
