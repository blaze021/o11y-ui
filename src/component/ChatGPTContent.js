// ChatGPTContent.js
import React, { useState, useRef, useEffect } from 'react';
import './ChatGPTContent.css'; // Import the CSS file for styling

const ChatGPTContent = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Auto-scroll to the bottom of the chat history when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chatHistory]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setChatHistory([...chatHistory, { text: inputText, sender: 'user' }]);
      setInputText('');
    }
  };

  return (
    <div className="chatgpt-content">
      <div className="chat-history" ref={chatContainerRef}>
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button className="send-button" onClick={handleSendMessage}>
          Ask
        </button>
      </div>
    </div>
  );
};

export default ChatGPTContent;
