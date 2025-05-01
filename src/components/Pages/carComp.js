import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const CarComparison = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCarComparisons = async () => {
    const carName = localStorage.getItem("carModel");
    if (!carName) {
      alert("No car name found in localStorage");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5004/compare_cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ car_name: carName }),
      });
      if (!response.ok) throw new Error("Failed to fetch comparisons");
      const data = await response.json();
      console.log("car comp is :",data.comparisons)
      setCars(data.comparisons || []);
    } catch (error) {
      console.error("Error fetching comparisons:", error);
      setError("Error fetching car comparison data.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCarComparisons();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="p-6 flex-1">
        <div className="flex justify-center mb-8">
  <h1 className="text-4xl font-bold text-white tracking-wide text-center">Car Comparison</h1>
</div>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
            </div>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-xl shadow-xl overflow-x-auto"
            >
              <table className="w-full text-left text-gray-300 border-collapse">
                <thead>
                  <tr className="bg-gray-700 text-gray-200">
                    <th className="p-3 text-sm font-semibold">Feature</th>
                    {cars.map((car, index) => (
                      <th key={index} className="p-3 text-sm font-semibold text-center">{car.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {["engine", "transmission", "fuel_economy", "price"].map((feature) => (
                    <tr key={feature} className="hover:bg-gray-700 transition-all">
                      <td className="p-3 capitalize">{feature.replace("_", " ")}</td>
                      {cars.map((car, index) => (
                        <td
                          key={index}
                          className={`p-3 text-center ${
                            feature === "price" ? "font-bold text-green-400" : ""
                          }`}
                        >
                          {car[feature]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default CarComparison;
