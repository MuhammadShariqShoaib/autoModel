import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Data for the three modules with background images and text
const modules = [
  {
    id: 1,
    name: '✔️Car Make, Model & Variant Detection',
    description: 'Detect the make, model, and variant of any car from a picture.',
    image: '1.png', // Replace with the actual image path
    route: '/car-detection', // Route for the module
  },
  {
    id: 2,
    name: 'Customer Support & Assistance',
    description: 'Get help and support for any inquiries or issues you may have.',
    image: 'cars.jpg', // Replace with the actual image path
    route: '/Progress', // Route for the module
  },
  {
    id: 3,
    name: '3D Model Customization',
    description: 'View and modify 3D models of cars with personalized features.',
    image: '2.jpg', // Replace with the actual image path
    route: '/Progress', // Route for the module
  },
];

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen px-16 md:px-32 relative flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/car.jpg')", // Replace with the correct path to your image
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

        <div className="relative z-10 text-white w-full max-w-5xl p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to AutoModel Insight</h1>
          <p className="text-lg leading-relaxed mb-8">
            Our platform offers advanced solutions for car make, model, and variant detection,
            car damage analysis, and 3D model customization. Explore the power of AI and take
            your automotive experience to the next level.
          </p>
          <div className="space-x-4">
            <Link to='/Progress'>
            <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              View Demo
            </button>
            </Link>
            <Link to='/Progress'>
            <button className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
              Documentation
            </button>
            </Link>
          </div>
        </div>

        {/* Card Grid with Circular Transition */}
        <div className="relative z-10 my-7 grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 max-w-7xl">
          {modules.map((module, index) => (
            <div
              key={module.id}
              onClick={() => navigate(module.route)} // Navigate to the route on click
              className={`circular-card w-full h-[300px] rounded-lg shadow-lg overflow-hidden bg-cover bg-center relative cursor-pointer`}
              style={{
                backgroundImage: `url(${module.image})`,
                animationDelay: `${index * 0.5}s`, // Add delay for staggered effect
              }}
            >
              <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">{module.name}</h2>
                <p className="text-sm text-center leading-relaxed">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
