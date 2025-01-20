import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <>
    
    <div
      className="min-h-screen bg-gray-900 text-white px-6 md:px-12 bg-cover bg-center"
      style={{ backgroundImage: "url('landing.jpg')" }}
    >
      {/* Header Section */}
      <header className="text-center py-8 border-b ">
        <h1 className="text-4xl font-extrabold mb-4">The Importance of Car Identification</h1>
        <p className="text-lg">Understanding the technology and vision behind AutoModel Insight.</p>
      </header>

      {/* Content Section */}
      <main className="py-8 max-w-4xl mx-auto bg-gray-900 bg-opacity-80 p-6 rounded-lg">
        <article className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Why Car Identification Matters</h2>
          <p className="leading-relaxed">
            In the modern automotive industry, accurate car identification is crucial. It enables seamless integration
            of services such as insurance, resale valuation, and maintenance. By identifying the make, model, and
            variant of a car, we open the door to a more personalized and efficient automotive experience.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Why We Are Doing This</h2>
          <p className="leading-relaxed">
            Our mission is to simplify car identification using cutting-edge image recognition technology. AutoModel
            Insight is designed to bridge the gap between technology and everyday car usage, making detailed car
            insights accessible to everyone, from dealerships to individual car owners.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-bold mb-2">The Impact of Our Technology</h2>
          <p className="leading-relaxed">
            By combining machine learning and 3D modeling, AutoModel Insight not only identifies cars but also provides
            a visual representation of the vehicle. This innovation enhances user interaction and ensures data accuracy
            for a wide range of applications, including inventory management and customization.
          </p>
        </article>

        <article className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Focused on Pakistan</h2>
          <p className="leading-relaxed">
            Currently, AutoModel Insight focuses on the Pakistani automotive market. Our platform caters to the
            specific needs of users in this region, ensuring accurate results tailored to local car models and
            variants. As we grow, we aim to expand globally while maintaining our high standards.
          </p>
        </article>

      </main>

      {/* Footer Section */}
      <footer className="text-center py-12  border-t ">
        <Link to='/start-identification' className="text-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
            Get Started with Car Identification
          </button>
        </Link>
          </footer>
    </div>
    </>
  );
};

export default BlogPage;