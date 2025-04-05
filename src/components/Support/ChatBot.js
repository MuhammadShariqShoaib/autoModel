import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaUser, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const ChatPage = () => {
  const [selectedBot, setSelectedBot] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const bots = {
    "3D Model Master": "Expert in 3D car modeling and customization.",
    "Car Detection Pro": "Specialist in car detection and identification.",
    "Query Solver AI": "Answers general queries about automobiles."
  };

  const handleBotSelection = (botName) => {
    setSelectedBot(botName);
    setMessages([{ sender: "bot", text: `Hello! I am ${botName}. How can I assist you?` }]);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("http://127.0.0.1:5004/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bot: selectedBot,
          message: input,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from chatbot.");
      }
      const data = await response.json();
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: "Sorry, I couldn't fetch a response." }]);
        setIsTyping(false);
      }, 1000);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col items-center h-[90vh] bg-gray-900 text-white p-4">
      {!selectedBot ? (
        <div className="flex flex-col gap-4 text-center w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4">Select a Chatbot</h2>
          {Object.keys(bots).map((bot) => (
            <button
              key={bot}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-lg flex items-center gap-2 shadow-lg w-full justify-center"
              onClick={() => handleBotSelection(bot)}
            >
              <FaRobot className="text-xl" /> {bot}
            </button>
          ))}
        </div>
      ) : (
        <div className="w-full max-w-md h-full flex flex-col border border-gray-700 bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-700 text-center py-3 text-lg font-bold border-b border-gray-600">
            Chat with {selectedBot}
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}> 
                {msg.sender === "bot" && <FaRobot className="text-blue-400 text-2xl" />}
                <div className={`p-3 max-w-xs rounded-lg text-sm ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-200"}`}>
                  {msg.text}
                </div>
                {msg.sender === "user" && <FaUser className="text-green-400 text-2xl" />}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaRobot className="text-blue-400 text-2xl" />
                <span className="animate-pulse">Typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t border-gray-600 bg-gray-800 flex items-center gap-2">
            <input
              type="text"
              className="flex-1 bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg flex items-center"
              onClick={handleSendMessage}
            >
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
