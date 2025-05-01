import React, { useState } from 'react';
// import Navbar from '../Pages/Navbar'; // You can enable it when needed

const ChatSupportBlog = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://127.0.0.1:5004/submit_feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Thank you for your feedback!');
        setFormData({ username: '', email: '', feedback: '' });
        console.log('Server response:', data);
      } else {
        alert('Something went wrong! Try again.');
        console.error('Server error:', data);
      }
    } catch (err) {
      console.error('Error sending feedback:', err);
      alert('Failed to connect to server.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white"
      style={{
        backgroundImage: "url('landing.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>

      <div className="relative z-10 w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Feedback Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username Here"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email Here"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Your Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Write your thoughts here..."
              className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatSupportBlog;