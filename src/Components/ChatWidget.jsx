import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, Loader2, Bot } from "lucide-react";

const ChatWidget = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Assalamu alaikum! How can I help you explore our heritage collection today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Sorry, I am having trouble connecting to the server right now.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 h-[500px] bg-white rounded-xl shadow-2xl border border-orange-100 flex flex-col z-[60] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
      {/* Header */}
      <div className="bg-amber-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot size={20} />
          <h3 className="font-semibold">Heritage Assistant</h3>
        </div>
        <button onClick={onClose} className="hover:text-orange-300 transition">
          <X size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-orange-50/30 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
                msg.role === "user"
                  ? "bg-orange-600 text-white rounded-br-none"
                  : "bg-white border border-orange-200 text-amber-900 rounded-bl-none shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-orange-200 p-3 rounded-lg rounded-bl-none shadow-sm">
              <Loader2 className="animate-spin text-orange-600" size={18} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form
        onSubmit={sendMessage}
        className="p-3 bg-white border-t border-orange-100 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Nakshi Kantha..."
          className="flex-1 border border-orange-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-orange-600 text-amber-900"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ChatWidget;
