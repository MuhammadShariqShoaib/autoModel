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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-6 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 w-full max-w-3xl text-center transition-transform transform hover:scale-105">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text  bg-blue-800 to-teal-400 mb-6">
            Welcome to
          </h1>
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">
            AutoModel Insight
          </h2>

          <div className="mb-12">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-800 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 rounded-xl shadow-xl transition-all transform hover:scale-105">
                  <FcGoogle className="text-xl" />
                  Continue with Google
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <button
                onClick={handleGetStarted}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl shadow-xl transition-all transform hover:scale-105"
              >
                Get Started
              </button>
            </SignedIn>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            By continuing, you agree to our{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">Terms</span> and{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default InfoPage;
