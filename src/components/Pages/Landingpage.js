import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser, SignInButton, SignedOut, SignedIn } from "@clerk/clerk-react";
import { FaCar, FaTools, FaLightbulb, FaUsers, FaChartLine, FaCube } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FcGoogle } from "react-icons/fc";

const InfoPage = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate(isSignedIn ? "/Get-Started" : "/sign-in");
  };

  const features = [
    { icon: <FaCar />, title: "Why AutoModel Insight?", desc: "Instantly identify car make, model, and variant using AI-powered image recognition." },
    { icon: <FaTools />, title: "How It Works?", desc: "Our AI scans your car photo, analyzes details, and presents an interactive 3D model." },
    { icon: <FaLightbulb />, title: "What Makes Us Different?", desc: "Beyond detection, we provide deep insights into car specs, conditions, and features." },
    { icon: <FaCube />, title: "Advanced Features", desc: "3D car models, damage analysis, and custom configurations for detailed insights." },
    { icon: <FaUsers />, title: "Who Can Use It?", desc: "Perfect for car dealers, buyers, and enthusiasts looking for in-depth vehicle analysis." },
    { icon: <FaChartLine />, title: "Future Vision", desc: "Expanding our AI model to support all global car manufacturers with precision." },
  ];

  return (
    <>
    <Navbar/>
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center"
      // style={{ backgroundImage: "url('/landing.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className=" min-h-screen w-full px-6 md:px-12 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white tracking-wide">AutoModel Insight</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
            AI-powered car identification and analysis at your fingertips.
          </p>
        </header>

        {/* Features Section */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-lg backdrop-blur-lg flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-blue-400 text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
              <p className="text-gray-300 mt-2">{feature.desc}</p>
            </div>
          ))}
        </main>

        {/* Call to Action */}
        <footer className=" mt-12 text-center">
          <SignedOut>
            <SignInButton mode="modal">
            <button className="   gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all transform hover:scale-105">
Continue with Google
      </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <button
              onClick={handleGetStarted}
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all"
            >
              Get Started
            </button>
          </SignedIn>
        </footer>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default InfoPage;
