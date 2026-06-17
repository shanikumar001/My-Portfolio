import { useEffect, useState } from "react";

const lines = [
  "B.TECH CSE STUDENT",
  "FOUNDER OF ZIURODB & ZIUROWORKERS",
  "FULLSTACK DEVELOPER",
  "BLOCKCHAIN DEVELOPER",
  "UI & UX DESIGNER",
  "DSA PROBLEM SOLVER",
];

export default function TypingHeading() {
  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (charIndex < lines[lineIndex].length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + lines[lineIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else {
      // Wait 5 seconds then move to next line
      timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setLineIndex((prev) => (prev + 1) % lines.length); // 🔁 infinite loop
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex]);

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
