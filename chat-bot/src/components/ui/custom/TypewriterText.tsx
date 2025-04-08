// src/components/Chat/TypewriterText.tsx (or similar path)
import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number; // Optional speed in milliseconds per character
  onComplete?: () => void; // Optional callback when typing finishes
  renderContent: (content: string) => React.ReactNode; // Pass the rendering function
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 3, // Default speed (adjust as needed)
  onComplete,
  renderContent,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (!text || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete(); // Typing finished
      }
      return; // Stop if text is empty or typing is complete
    }

    const timerId = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    // Cleanup function to clear the timeout if the component unmounts
    // or if the text/speed changes before completion
    return () => clearTimeout(timerId);

  }, [currentIndex, text, speed, onComplete]);

  // Use the provided render function to display the text with formatting
  return <>{renderContent(displayedText)}</>;
};

export default TypewriterText;