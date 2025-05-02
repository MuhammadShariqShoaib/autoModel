import { Link } from "react-router-dom";
import Navbar from "../Pages/Navbar";

const PricingPage = () => {
    return (
        <>
        <Navbar/>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-10 gap-12">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">Choose Your Plan</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Free Tier</h3>
            <p className="text-gray-600 mb-6">Perfect for testing the service.</p>
            <p className="text-3xl font-bold text-orange-600 mb-4">Free</p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✅ 5 Free Car Detections</li>
              <li>❌ No Premium Features</li>
              <li>❌ No Priority Support</li>
            </ul>
            <button className="w-full px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold cursor-default">
              Current Plan
            </button>
          </div>
  
          {/* $5 Tier */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-orange-500 transform scale-105">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Starter Pack</h3>
            <p className="text-gray-600 mb-6">Great for casual users.</p>
            <p className="text-3xl font-bold text-orange-600 mb-4">$5<span className="text-base font-medium text-gray-500">/month</span></p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✅ 20 Car Detections</li>
              <li>✅ Email Support</li>
              <li>❌ Unlimited Access</li>
            </ul>
            <Link to='/Card'>
            <button className="w-full px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
              Buy Now
            </button>
            </Link>
          </div>
  
          {/* $20/month Tier */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
            <p className="text-gray-600 mb-6">Unlimited access & exclusive tools.</p>
            <p className="text-3xl font-bold text-orange-600 mb-4">$20<span className="text-base font-medium text-gray-500">/month</span></p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✅ Unlimited Detections</li>
              <li>✅ All Premium Features</li>
              <li>✅ Priority Support</li>
            </ul>
            <Link to='/Card'>
            <button className="w-full px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
              Subscribe Now
            </button>
            </Link>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default PricingPage;
  