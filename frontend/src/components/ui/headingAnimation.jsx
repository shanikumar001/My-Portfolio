import { useEffect, useState } from "react";

const defaultLines = [
  "FOUNDER OF ZIURODB & ZIUROCODING",
  "FULL-STACK & DATABASE DEVELOPER",
  "B.TECH CSE (CGPA: 9.05 | ADTU)",
  "AI & MACHINE LEARNING DEVELOPER",
  "DESKTOP & DISTRIBUTED SYSTEMS CREATOR",
];

export default function TypingHeading({ titles }) {
  const lines = titles && titles.length > 0 ? titles : defaultLines;
  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Reset indices if lines change
  useEffect(() => {
    setLineIndex(0);
    setCharIndex(0);
    setDisplayText("");
  }, [lines.length]);

  useEffect(() => {
    let timeout;
    const currentLine = lines[lineIndex] || lines[0] || "";

    if (charIndex < currentLine.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 75);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setLineIndex((prev) => (prev + 1) % lines.length);
      }, 4500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, lines]);

  return (
    <h2
      className="
        text-2xl sm:text-3xl lg:text-[2rem] font-black leading-tight 
        bg-gradient-to-r from-primary via-accent to-primary
        bg-clip-text text-transparent
        bg-[length:200%_auto]
        animate-gradient
        min-h-[3rem]
      "
    >
      {displayText}
      <span className="animate-blink">|</span>
    </h2>
  );
}
