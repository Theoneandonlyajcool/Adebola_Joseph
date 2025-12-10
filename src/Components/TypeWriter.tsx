import { useState, useEffect, useMemo } from "react";

type TextType = {
  text: String;
};

const Typewriter = ({ text }: TextType) => {
  // 1. We keep track of the indices and state (no need for displayText state anymore)
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const TYPING_SPEED = 150;
  const DELETING_SPEED = 75;
  const PAUSE_DURATION = 1500;

  // --- DERIVED STATE ---
  // The text being displayed is calculated from the current state values (textIndex and charIndex)
  const currentText = text[textIndex];

  const displayText = useMemo(() => {
    // Always show the substring up to the current charIndex
    return currentText.substring(0, charIndex);
  }, [currentText, charIndex]);

  useEffect(() => {
    // --- Typing Logic ---
    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        // ONLY advance the charIndex
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    }

    // --- Pause before Deleting ---
    else if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_DURATION);
      return () => clearTimeout(timeout);
    }

    // --- Deleting Logic ---
    else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        // ONLY decrease the charIndex
        setCharIndex((prevCharIndex) => prevCharIndex - 1);
      }, DELETING_SPEED);
      return () => clearTimeout(timeout);
    }

    // --- Switch to Next String Logic ---
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prevTextIndex) => (prevTextIndex + 1) % text.length);
    }

    // Dependencies are the same, but the logic inside is much cleaner now
  }, [textIndex, charIndex, isDeleting, text, currentText]);

  return (
    <div className="text-4xl font-bold text-gray-800 p-4">
      {/* Use the derived displayText */}
      <span className="text-indigo-600">{displayText}</span>

      {/* The blinking cursor */}
      <span
        className={`
        inline-block w-1 bg-indigo-600 ml-1 
        ${isDeleting ? "h-8 animate-pulse" : "h-10 animate-ping"} 
      `}
      ></span>
    </div>
  );
};

export default Typewriter;
