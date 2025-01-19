import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import "./App.css";
import { SlArrowDown } from "react-icons/sl";

import ChatMessage from "./components/ChatMessage";
import { companyInfo } from "./components/companyInfo";
const App = () => {
  const chatBodyRef = useRef();
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo,
    },
  ]);
  const generateBotResponse = async (history) => {
    // Helper function to update chat history
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [...prev.filter((msg) => msg.text != "Thinking..."), { role: "model", text, isError }]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history }),
    };

    console.log(history);

    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=AIzaSyAcCMdJUxSf3OXmorchF1TGrwSTAbjXcKM',
        requestOption
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      console.log(data);

      const botResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text?.replace(/<br>/g, '\n').trim() ||
        "Sorry, I didn't understand that.";

      updateHistory(botResponse);
    } catch (error) {
      console.error(error);
      updateHistory("Sorry, I couldn't fetch a response at the moment. Please try again later.");
    }
  };

  useEffect(() => {
    const chatBody = chatBodyRef.current;
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className='font'>
      <div className="container">
        {/* Chatbot Icon */}
        <div className="chatbot-icon">
          <button
            className='toggle-button'
            onClick={() => setShowChatbot(!showChatbot)}
          >
            <ChatbotIcon />
          </button>
        </div>

        {/* Chatbot Popup */}
        {showChatbot && (
          <div className="chatbot-popup bg-white w-[420px] overflow-hidden rounded-md">
            {/* Chatbot Header */}
            <div className="chat-header">
              <div className="header-info">
                <ChatbotIcon />
                <h2 className='logo-text text-red-500'>Pandey's Bot</h2>
              </div>
              <button
                onClick={() => setShowChatbot(false)}
                className='material-symbols-rounded'
              >
                <SlArrowDown />
              </button>
            </div>

            {/* Chatbot Body */}
            <div ref={chatBodyRef} className="chat-body">
              <div className="message bot-message">
                <ChatbotIcon />
                <p className='message-text'>
                  Hey there! <br /> How can I help you today?
                </p>
              </div>
              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat} />
              ))}
            </div>

            {/* Chatbot Footer */}
            <div className="chat-footer">
              <ChatForm
                chatHistory={chatHistory}
                setChatHistory={setChatHistory}
                generateBotResponse={generateBotResponse}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
