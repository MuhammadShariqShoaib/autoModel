import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-bold">AutoModel Insight</h2>
            <p className="text-gray-400 text-lg mt-2">
              Revolutionizing car identification with AI-powered technology.
            </p>
          </div>

          {/* Description Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-400">
              We aim to enhance car identification with cutting-edge AI, bringing precision and ease to every user.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-400 flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2 text-blue-400" /> rajashariq@automodel.com
            </p>
            <p className="text-gray-400 flex items-center justify-center md:justify-start mt-2">
              <FaPhoneAlt className="mr-2 text-green-400" /> 0333312121
            </p>
            <p className="text-gray-400 flex items-center justify-center md:justify-start mt-2">
              <FaMapMarkerAlt className="mr-2 text-red-400" /> Islamabad, Pakistan
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center mt-12 border-t border-gray-700 pt-6 space-x-6">
          <FaFacebookF className="text-gray-400 text-2xl" />
          <FaTwitter className="text-gray-400 text-2xl" />
          <FaLinkedinIn className="text-gray-400 text-2xl" />
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} AutoModel Insight. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
