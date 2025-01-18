import React from 'react';

const ChatbotIcon = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="64"
        height="64"
        fill="none"
      >
        {/* Head */}
        <rect
          x="16"
          y="20"
          width="32"
          height="30"
          rx="8"
          ry="8"
          stroke="#000"
          strokeWidth="2"
          fill="white"
        />
        {/* Antenna */}
        <circle cx="32" cy="14" r="4" fill="#000" />
        <line
          x1="32"
          y1="18"
          x2="32"
          y2="20"
          stroke="#000"
          strokeWidth="2"
        />
        {/* Eyes */}
        <circle cx="24" cy="32" r="2" fill="#000" />
        <circle cx="40" cy="32" r="2" fill="#000" />
        {/* Mouth */}
        <rect x="27" y="38" width="10" height="2" rx="1" fill="#000" />
        {/* Body */}
        <rect
          x="12"
          y="46"
          width="40"
          height="12"
          rx="6"
          ry="6"
          stroke="#000"
          strokeWidth="2"
          fill="white"
        />
        {/* Arms */}
        <rect x="6" y="28" width="6" height="16" rx="3" fill="#000" />
        <rect x="52" y="28" width="6" height="16" rx="3" fill="#000" />
      </svg>
    </div>
  );
};

export default ChatbotIcon;
