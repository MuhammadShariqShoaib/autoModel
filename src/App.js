import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Cariden from "./components/Car Identification/Cariden";
import Contact from "./components/Pages/Contact";
import InfoPage from "./components/Pages/Landingpage";
import BlogPage from "./components/Car Identification/Blog_iden";
import ThreeDModelBlog from "./components/3D Modeling/ThreeDModelBlog";
import ChatSupportBlog from "./components/Support/ChatSupportBlog";
import AutoModel from "./components/Car Identification/AutoModel";
import CarDetails from "./components/Car Identification/carDetails";
import CarSpecs from "./components/Pages/carSpecs";
import CarComparison from "./components/Pages/carComp";
import Sidebar from "./components/Pages/Sidebar";
import CarVariants from "./components/Pages/carVar";
import ChatPage from "./components/Support/ChatBot";
import { X, ChartBar, ChartArea} from "lucide-react";

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<InfoPage />} />
          <Route path="/Get-Started" element={<Home />} />
          <Route path="/car-detection" element={<BlogPage />} />
          <Route path="/Support" element={<Contact />} />
          <Route path="/start-identification" element={<Cariden />} />
          <Route path="/ThreeDModelBlog" element={<ThreeDModelBlog />} />
          <Route path="/ChatSupportBlog" element={<ChatSupportBlog />} />
          <Route path="/AutoModel" element={<AutoModel />} />
          <Route path="/carDetails" element={<CarDetails />} />
          <Route path="/carSpecs" element={<CarSpecs />} />
          <Route path="/CarComparison" element={<CarComparison />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/CarVariants" element={<CarVariants />} />
        </Routes>
        
        {/* Floating Chat Button */}
        <div className="fixed bottom-5 right-5 z-50">
          {!chatOpen ? (
            <button
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
              onClick={() => setChatOpen(true)}
            >
              <ChartArea size={40} />
            </button>
          ) : (
            <div className="relative bg-white p-1 shadow-lg rounded-lg w-96 border">
              <button
                className="absolute top-2 right-2 text-red-500"
                onClick={() => setChatOpen(false)}
              >
                <X size={20} />
              </button>
              <ChatPage />
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
