import React, { useState, useEffect } from 'react';

function TypingAnimation({ text }) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here
    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <div>
      <span>{typedText}</span>
      <span className="animate-pulse">|</span> {/* Blinking cursor */}
    </div>
  );
}

export default TypingAnimation;