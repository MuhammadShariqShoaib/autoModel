
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

import { FaCar, FaTools, FaLightbulb, FaUsers, FaChartLine, FaCube } from "react-icons/fa";

const modules = [
  {
    id: 1,
    name: 'Car Make, Model & Variant Detection',
    description: 'Detect the make, model, and variant of any car from a picture.',
    image: '1.png',
    route: '/car-detection',
  },
  {
    id: 2,
    name: '3D Model Customization',
    description: 'View and modify 3D models of cars with personalized features.',
    image: '2.jpg',
    route: '/ThreeDModelBlog',
  },
  {
    id: 3,
    name: 'Customer Support & Assistance',
    description: 'Get help and support for any inquiries or issues you may have.',
    image: 'cars.jpg',
    route: '/ChatSupportBlog',
  }
];

const faqs = [
  { question: 'How accurate is the AI detection?', answer: 'Our AI models achieve over 95% accuracy in detecting car make, model, and variant.' },
  { question: 'Can I use this platform for used car evaluation?', answer: 'Yes! Our platform provides car valuation reports based on real-time data.' },
  { question: 'Do I need any special software to access the 3D car customization?', answer: 'No, you can access it directly from your web browser without any additional installations.' },
];

const reviews = [
  { name: 'Ali Khan', review: 'Amazing platform! The AI-powered detection is incredibly fast and accurate.' },
  { name: 'Sarah Ahmed', review: 'The 3D customization feature is a game-changer for car enthusiasts like me!' },
  { name: 'Usman Raza', review: 'I used the car damage analysis, and it saved me from buying a faulty car. Highly recommend!' },
];

const Home = () => {
  const navigate = useNavigate();


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
      <Navbar />
      <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col items-center px-6 md:px-10 lg:px-20 py-10">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Welcome to AutoModel Insight</h1>
          <p className="text-lg text-gray-300 mb-6">
            A cutting-edge AI-powered platform for car make, model, and variant detection, 3D car customization, and
            real-time damage analysis. Revolutionizing the automotive industry with advanced AI and deep learning.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <Link to='/Progress'>
              <button className="px-8 py-3 text-lg font-semibold bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                View Demo
              </button>
            </Link>
            <a
              href="/sample.docx"
              download="Sample.docx"
              className="px-8 py-3 text-lg font-semibold bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              Documentation
            </a>
          </div>


          <div className="mt-4 mb-10">
            <Link to='/start-identification'>
              <button className="px-8 py-3 text-lg font-semibold bg-blue-800  text-white   rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                Try Model
              </button>
            </Link>
          </div>
        </div>

        <main className="grid grid-cols-1 text-center  md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="mt-10 max-w-6xl  text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">How to Use</h2>
          <p className="text-lg mb-6 text-gray-300">
            Our AI system processes car images to identify details and provide customization options.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📷", title: "Upload Image", desc: "Upload a picture of your car to begin." },
              { icon: "🤖", title: "AI Detection", desc: "Our AI detects the make, model, and variant." },
              { icon: "🎨", title: "3D Customization", desc: "Modify the 3D model with various options." },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-8 rounded-xl shadow-lg flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-800 transition-all hover:shadow-2xl hover:scale-105"
              >
                <div className="absolute -top-6 w-14 h-14 flex items-center justify-center bg-gray-700 text-3xl rounded-full shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mt-10 mb-3 text-blue-400">{item.title}</h3>
                <p className="text-gray-400 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact & Scope Section */}
        <div className="mt-16 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Impact & Scope</h2>
          <p className="text-lg text-gray-300 mb-6">AutoModel Insight is designed to benefit multiple industries:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Automobile Sales", "Insurance & Claims", "Car Customization"].map((item, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-400">{item}</h3>
                <p className="text-gray-400">Enhancing the way professionals handle vehicles with AI-powered insights.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mt-16 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Technologies Powering AutoModel Insight</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["TensorFlow", "Next.js", "MongoDB", "Three.js"].map((tech, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg text-lg font-semibold">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-800 p-6  rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold  mb-3 text-blue-400">{review.name}</h3>
                <p>"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>
        {/* FAQ Section */}
        <div className="mt-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
