import React from 'react';
import { Link } from 'react-router-dom';

const ThreeDModelBlog = () => {
  return (
    <div
      className="relative min-h-screen bg-gray-900 text-white"
      style={{ backgroundImage: "url('landing.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className="text-center py-8 border-b border-gray-700">
          <h1 className="text-4xl font-extrabold mb-4">3D Models & How AutoModel Works</h1>
          <p className="text-lg text-gray-300">
            Explore the integration of 3D models and learn how AutoModel identifies cars with precision.
          </p>
        </header>

        {/* Content Section */}
        <main className="py-12 max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg">
            <article className="mb-8">
              <h2 className="text-2xl font-bold mb-4">The Role of 3D Models in Car Identification</h2>
              <p className="leading-relaxed text-gray-300">
                3D modeling plays a pivotal role in enhancing user experience and accuracy. AutoModel uses advanced
                rendering techniques to visualize the detected car. These 3D models allow users to interact, customize,
                and explore cars like never before. From inspecting every detail to trying out new colors, the 3D
                visualization redefines engagement.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How AutoModel Works</h2>
              <p className="leading-relaxed text-gray-300">
                AutoModel leverages cutting-edge AI and machine learning to identify the make, model, and variant of a
                car from uploaded images. The process begins with preprocessing the image to identify key features,
                followed by a robust classification algorithm to pinpoint the car details. The data is then enriched
                with relevant specifications and displayed alongside a 3D model for a complete experience.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Seamless Integration</h2>
              <p className="leading-relaxed text-gray-300">
                Our platform seamlessly integrates 3D technology and car identification to provide a unified solution
                for users. Whether you're a dealership, an individual car enthusiast, or a service provider, AutoModel
                offers a comprehensive tool to simplify car management and exploration.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose AutoModel</h2>
              <p className="leading-relaxed text-gray-300">
                With a focus on innovation and accuracy, AutoModel stands out as a leader in automotive identification.
                Our platform ensures that users not only get precise information but also an immersive experience with
                3D visualizations. Designed with the future in mind, AutoModel is your go-to solution for car
                identification.
              </p>
            </article>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="text-center py-8 border-t border-gray-700">
          <Link to="/AutoModel" className="inline-block">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md transition duration-300">
              Start Exploring 3D Models
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default ThreeDModelBlog;
