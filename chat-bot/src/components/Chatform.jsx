import React, { useRef } from 'react';
import { SlCursor } from 'react-icons/sl';

const Chatform = ({ setChatHistory,generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    // Clear input field
    inputRef.current.value = '';

    // Update chat history
    setChatHistory((history) => [...history, { role: 'user', text: userMessage }]);

    // added a THining ... text for bot response
    setTimeout(() => {
        setChatHistory((history) => [...history, { role: 'model', text:"Thinking..." }]);
    }, 600);
    console.log(userMessage);
    

    
  };

  return (
    <div>
      <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Message...."
          className="message-input"
          ref={inputRef}
          required
        />
        <button type="submit">
          <SlCursor />
        </button>
      </form>
    </div>
  );
};

export default Chatform;
