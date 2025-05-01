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

  return (
  <>
  <Navbar />

  {/* Hero Section */}
  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 flex items-center justify-center px-6 py-20">
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 md:p-16 w-full max-w-4xl text-center transition-transform transform hover:scale-[1.03] duration-300">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 mb-4 animate-fade-in-down">
        Welcome to
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
        AutoModel Insight
      </h2>

      <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10 animate-fade-in-up delay-100">
        Discover car models with AI, detect damages, and explore 3D visualizations — all in one platform.
      </p>

      <div className="mb-10">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 rounded-xl shadow-lg transition-all transform hover:scale-105 duration-300">
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <button
            onClick={handleGetStarted}
            className="w-full bg-green-500  hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-all transform hover:scale-105 duration-300"
          >
            Get Started
          </button>
        </SignedIn>
      </div>

      <p className="text-sm text-gray-400">
        By continuing, you agree to our{" "}
        <span className="text-blue-400 hover:underline cursor-pointer">Terms</span> and{" "}
        <span className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</span>.
      </p>
    </div>
  </div>

  <Footer />
</>

  );
};

export default InfoPage;
