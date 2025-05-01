import React, { useState } from "react";
import { FaCar, FaBalanceScale, FaListAlt, FaDollarSign, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`w-full ${isOpen ? "h-20" : "h-12"} pb-28 lg:pb-2 bg-gray-950 text-white transition-all duration-300  flex flex-col p-4 shadow-lg border-b border-gray-700`}>
      <button className="text-xl self-end mb-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <nav className="flex justify-center gap-6">
          <NavLink
            to="/CarSpecs"
            className={({ isActive }) =>
              `flex items-center gap-2 text-lg hover:text-gray-400 transition ${isActive ? "text-orange-500" : ""
              }`
            }
          >
            <FaCar /> Car Specs
          </NavLink>
          <NavLink
            to="/CarComparison"
            className={({ isActive }) =>
              `flex items-center gap-2 text-lg hover:text-gray-400 transition ${isActive ? "text-orange-500" : ""
              }`
            }
          >
            <FaBalanceScale /> Car Comparison
          </NavLink>
          <NavLink
            to="/CarVariants"
            className={({ isActive }) =>
              `flex items-center gap-2 text-lg hover:text-gray-400 transition ${isActive ? "text-orange-500" : ""
              }`
            }
          >
            <FaListAlt /> Car Variants
          </NavLink>
          <NavLink
            to="/AutoModel"
            className={({ isActive }) =>
              `flex items-center gap-2 text-lg hover:text-gray-400 transition ${isActive ? "text-orange-500" : ""
              }`
            }
          >
            <FaDollarSign /> Generate 3D Model
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
