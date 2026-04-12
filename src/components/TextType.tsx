"use client";

import React, { useState, useEffect, useMemo } from "react";

interface TextTypeProps {
  text?: string[];
  texts?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  variableSpeedEnabled?: boolean;
  variableSpeedMin?: number;
  variableSpeedMax?: number;
  cursorBlinkDuration?: number;
  className?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  texts,
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "_",
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  cursorBlinkDuration = 0.5,
  className = "",
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const displayTexts = useMemo(() => text || texts || [""], [text, texts]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const i = loopNum % displayTexts.length;
      const fullText = displayTexts[i];

      setCurrentText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

      if (variableSpeedEnabled && !isDeleting) {
        typeSpeed = Math.floor(Math.random() * (variableSpeedMax - variableSpeedMin + 1)) + variableSpeedMin;
      }

      if (!isDeleting && currentText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(() => {}, 500); // Wait a bit before typing next string
      } else {
        timer = setTimeout(handleTyping, typeSpeed);
      }
    };

    timer = setTimeout(handleTyping, 100);

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    loopNum,
    displayTexts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    variableSpeedEnabled,
    variableSpeedMax,
    variableSpeedMin,
  ]);

  return (
    <span className={className}>
      {currentText}
      {showCursor && (
        <span
          style={{
            animation: `blink ${cursorBlinkDuration}s step-end infinite`,
          }}
        >
          {cursorCharacter}
        </span>
      )}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default TextType;
