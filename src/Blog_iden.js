import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
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
          <h1 className="text-4xl font-extrabold mb-4">The Importance of Car Identification</h1>
          <p className="text-lg text-gray-300">Understanding the technology and vision behind AutoModel Insight.</p>
        </header>

        {/* Content Section */}
        <main className="py-12 max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg">
            <article className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Car Identification Matters</h2>
              <p className="leading-relaxed text-gray-300">
                In the modern automotive industry, accurate car identification is crucial. It enables seamless
                integration of services such as insurance, resale valuation, and maintenance. By identifying the make,
                model, and variant of a car, we open the door to a more personalized and efficient automotive experience.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Why We Are Doing This</h2>
              <p className="leading-relaxed text-gray-300">
                Our mission is to simplify car identification using cutting-edge image recognition technology. AutoModel
                Insight is designed to bridge the gap between technology and everyday car usage, making detailed car
                insights accessible to everyone, from dealerships to individual car owners.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold mb-4">The Impact of Our Technology</h2>
              <p className="leading-relaxed text-gray-300">
                By combining machine learning and 3D modeling, AutoModel Insight not only identifies cars but also
                provides a visual representation of the vehicle. This innovation enhances user interaction and ensures
                data accuracy for a wide range of applications, including inventory management and customization.
              </p>
            </article>

            <article className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Focused on Pakistan</h2>
              <p className="leading-relaxed text-gray-300">
                Currently, AutoModel Insight focuses on the Pakistani automotive market. Our platform caters to the
                specific needs of users in this region, ensuring accurate results tailored to local car models and
                variants. As we grow, we aim to expand globally while maintaining our high standards.
              </p>
            </article>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="text-center py-8 border-t border-gray-700">
          <Link to="/start-identification" className="inline-block">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md transition duration-300">
              Get Started with Car Identification
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default BlogPage;
