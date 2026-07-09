import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AIChatbot.css'; // Styling iske niche wale step mein hai

function AIChatbot({ context = "landing" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I am your Kite AI assistant. Ask me anything about stocks or the market!", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput("");
    setLoading(true);

    try {
      // Backend api hit karenge jo hum step 3 mein banayenge
      const response = await axios.post('http://localhost:3002/api/ai-chat', {
        message: userMessage,
        context: context // to check 'landing' or 'dashboard' 
      });

      setMessages(prev => [...prev, { text: response.data.reply, isBot: true }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Sorry, facing some connection issues. Try again!", isBot: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-chatbot-wrapper">
      
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "💬 AI Assist"}
      </button>

      {isOpen && (
        <div className="chat-window card shadow">
          <div className="chat-header">
            <h4> TradeSense Advisor {context === 'dashboard' ? '📈' : '🤖'}</h4>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`message-bubble ${msg.isBot ? 'bot' : 'user'}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="message-bubble bot typing">Thinking...</div>}
          </div>
          <form className="chat-footer" onSubmit={handleSendMessage}>
            <input 
              type="text" 
              placeholder="Ask about Nifty, Stocks, Prices..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AIChatbot;