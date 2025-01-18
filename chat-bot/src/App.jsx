import React, { useState } from 'react'
import "./App.css"
import { SlArrowDown } from "react-icons/sl";
import ChatbotIcon from './components/ChatbotIcon'
import Chatform from './components/Chatform';
import ChatMessage from './components/ChatMessage';


const App = () => {

  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse =()=>{

  }


  return (
    <div className=' font'>
      <div className="container">
        <div className="chatbot-popup bg-white w-[420px] overflow-hidden rounded-md ">
          {/* header */}
          <div className="chat-header">
            <div className="header-info">
            <ChatbotIcon></ChatbotIcon>
              <h2 className='logo-text text-red-500'>Google BaBa</h2>
            </div>
            <button className='material-symbols-rounded'><SlArrowDown />
            </button>
          </div>

          {/* body */}
          <div className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon></ChatbotIcon>
              <p className='message-text'> Hey there <br></br> How can I help you today?
              </p>
            </div>
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}

            
          </div>
          {/* chat footer */}
          <div className="chat-footer">
            <Chatform setChatHistory={setChatHistory} generateBotResponse ={generateBotResponse}></Chatform>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
