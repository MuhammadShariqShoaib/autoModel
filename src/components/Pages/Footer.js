import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Brand Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">AutoModel Insight</h2>
            <p className="text-gray-400 text-lg mt-2">
              Empowering your automotive journey with AI innovation.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-lg mb-4">Follow us on:</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AutoModel Insight. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
