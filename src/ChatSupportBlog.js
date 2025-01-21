import React, { useState } from 'react';

const ChatSupportBlog = () => {
  const [chatOpen, setChatOpen] = useState(true); // State to toggle chat box
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: userInput },
        { sender: 'bot', text: 'hello ? keya kaam hai' },
      ]);
      setUserInput('');
    }
  };

  return (
    <div
      className="relative min-h-screen bg-gray-900 text-white"
      style={{
        backgroundImage: "url('landing.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <header className="text-center py-8 border-b border-gray-700">
          <h1 className="text-4xl font-extrabold mb-4">AI-Powered Chat Support</h1>
          <p className="text-lg text-gray-300">
            Discover how AI CustomBot is transforming customer support and the limitless possibilities of AI-driven assistance.
          </p>
        </header>

        {/* Footer Section */}
        <footer className="text-center py-8 border-t border-gray-700">
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md transition duration-300"
          >
            {chatOpen ? 'Close Chat' : 'Chat with AI'}
          </button>
        </footer>
      </div>

      {/* Dummy Chat Box */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-gray-800 text-white rounded-lg shadow-lg">
          <div className="bg-blue-600 px-4 py-2 rounded-t-lg">
            <h3 className="text-lg font-bold">AI Chat Support</h3>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.length === 0 && (
              <p className="text-gray-400 text-sm">Say hi to start the conversation!</p>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <p
                  className={`inline-block px-4 py-2 rounded-lg ${
                    msg.sender === 'user' ? 'bg-blue-500' : 'bg-gray-700'
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-700">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-4 py-2 rounded-lg text-gray-900"
            />
            <button
              onClick={handleSendMessage}
              className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSupportBlog;
