import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const CarSpecs = () => {
  const [isOpen, setIsOpen] = useState(true);

  const carData = {
    name: "Suzuki Alto 2024",
    images: ["/Alto.jpg", "/Altob.jpg", "/altoc.png"],
    engine: {
      type: "660cc R06A Inline-3",
      horsepower: "39 HP @ 6500 RPM",
      torque: "56 Nm @ 4000 RPM",
      transmission: "5-Speed Manual / AGS Automatic",
      fuelType: "Petrol",
      fuelEconomy: "22-25 km/l",
      fuelTankCapacity: "27 Liters",
    },
    dimensions: {
      length: "3395 mm",
      width: "1475 mm",
      height: "1490 mm",
      wheelbase: "2460 mm",
      groundClearance: "170 mm",
      weight: "650 kg",
      seatingCapacity: "4-5 Persons",
      bootSpace: "125 Liters",
    },
    performance: {
      topSpeed: "140 km/h",
      acceleration: "0-100 km/h in ~15 seconds",
      driveType: "Front-Wheel Drive (FWD)",
    },
    price: "PKR 3,200,000",
  };

  return (
    <>
      <Navbar />
      
     <Sidebar/>
      <div className="flex min-h-screen bg-black text-white">

        {/* Main Content */}
        <div className={`bg-gray-900 p-6 flex-1  transition-all duration-300`}>        
          <h1 className="text-3xl font-bold text-gray-100 mb-6">{carData.name} - Specs</h1>

          {/* Car Images */}
          <div className="flex pl-10 gap-20 overflow-x-auto pb-4">
            {carData.images.map((src, index) => (
              <div key={index} className="w-80 h-52 flex-shrink-0">
                <img src={src} alt={`${carData.name} Image ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
            ))}
          </div>

          {/* Engine Specs */}
          <section className="bg-gray-800 mt-6 p-4 rounded-lg shadow-md" id="specs">
            <h2 className="text-2xl font-semibold mb-3 text-white">Engine & Performance</h2>
            <ul className="text-gray-300 space-y-2">
              {Object.entries(carData.engine).map(([key, value]) => (
                <li key={key}><strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value}</li>
              ))}
            </ul>
          </section>

          {/* Dimensions */}
          <section className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-white">Dimensions</h2>
            <ul className="text-gray-300 space-y-2">
              {Object.entries(carData.dimensions).map(([key, value]) => (
                <li key={key}><strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value}</li>
              ))}
            </ul>
          </section>

          {/* Performance */}
          <section className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-white">Performance</h2>
            <ul className="text-gray-300 space-y-2">
              {Object.entries(carData.performance).map(([key, value]) => (
                <li key={key}><strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value}</li>
              ))}
            </ul>
          </section>

          {/* Price */}
          <section className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md" id="pricing">
            <h2 className="text-2xl font-semibold mb-3 text-white">Price</h2>
            <p className="text-xl font-bold text-green-400">{carData.price}</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default CarSpecs;
