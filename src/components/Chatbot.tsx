import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, `You: ${input}`]);
    setInput("");
    setMessages((prev) => [...prev, "Bot: This is a sample response."]);
  };

  return (
    <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-2xl flex flex-col space-y-4">
      <h2 className="text-xl font-bold text-center">Healthcare Chatbot</h2>
      <div className="flex-1 overflow-y-auto border p-2 rounded bg-gray-50 h-64">
        {messages.map((msg, idx) => (
          <p key={idx} className="text-sm my-1">{msg}</p>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;