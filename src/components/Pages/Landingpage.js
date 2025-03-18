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
            <button className="  flex gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="28" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
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
