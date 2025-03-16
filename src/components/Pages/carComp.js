import { useState } from "react";
import { FaArrowLeft, FaBalanceScale } from "react-icons/fa";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const CarComparison = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Hardcoded comparison data (Replace with API data later)
  const cars = [
    {
      name: "Suzuki Alto 2024",
      image: "/Alto.jpg",
      engine: "660cc R06A",
      horsepower: "39 HP",
      torque: "56 Nm",
      fuelEconomy: "22-25 km/l",
      price: "PKR 3,200,000",
    },
    {
      name: "Suzuki Wagon R 2024",
      image: "/weg.jpeg",
      engine: "1000cc K10B",
      horsepower: "67 HP",
      torque: "90 Nm",
      fuelEconomy: "18-22 km/l",
      price: "PKR 3,800,000",
    },
    {
        name: "Suzuki cultus2024",
        image: "/cultus.jpg",
        engine: "1000cc K10B",
        horsepower: "67 HP",
        torque: "90 Nm",
        fuelEconomy: "18-22 km/l",
        price: "PKR 3,900,000",
      },
    {
        name: "Kia Picanto 2024",
        image: "/picanto.jpeg",
        engine: "1000cc MPI",
        horsepower: "68 HP",
        torque: "96 Nm",
        transmission: "5-Speed Manual / 4-Speed Automatic",
        fuelEconomy: "15-18 km/l",
        price: "PKR 3,800,000",
      },
  ];

  return (
    <>
      <Navbar />
    <Sidebar/>
      <div className="flex min-h-screen bg-black text-white ">
        {/* Sidebar */}

        {/* Main Content */}
        <div className={`bg-gray-900 p-6 flex-1  transition-all duration-300`}>        
          <h1 className="text-3xl font-bold text-gray-100 mb-6">Car Comparison</h1>

          {/* Car Comparison Table */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md overflow-x-auto">
            <table className="w-full text-left text-gray-300">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="p-2">Feature</th>
                  {cars.map((car, index) => (
                    <th key={index} className="p-2">{car.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-2">Image</td>
                  {cars.map((car, index) => (
                    <td key={index} className="p-2">
                      <img src={car.image} alt={car.name} className="w-32 h-20 object-cover rounded-lg" />
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-2">Engine</td>
                  {cars.map((car, index) => (
                    <td key={index} className="p-2">{car.engine}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-2">Horsepower</td>
                  {cars.map((car, index) => (
                    <td key={index} className="p-2">{car.horsepower}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-2">Torque</td>
                  {cars.map((car, index) => (
                    <td key={index} className="p-2">{car.torque}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-2">Fuel Economy</td>
                  {cars.map((car, index) => (
                    <td key={index} className="p-2">{car.fuelEconomy}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2">Price</td>
                  {cars.map((car, index) => (
                    <td key={index} className="p-2 font-bold text-green-400">{car.price}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarComparison;
