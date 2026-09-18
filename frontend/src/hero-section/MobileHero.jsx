import React, { useState, useEffect } from "react";
import { ArrowDown, Download, ExternalLink, Code2, Link2, Palette, MapPin, Terminal, ArrowRight, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import shani from "../assets/shani4.png";
import shaniBack from "../assets/shani4.png";
import instagram2 from "../assets/icon/instagram2.png";
import youtube2 from "../assets/icon/youtube2.png";
import linkdin2 from "../assets/icon/linkdin2.png";
import TypingHeading from "../components/ui/headingAnimation";

const MobileHero = ({ scrollToSection }) => {
  const [flipped, setFlipped] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setFlipped(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const handleDownloadCV = () => {
    window.open("/cv.pdf", "_blank") || alert("CV download will be available soon!");
  };

  const socialLinks = [
    { icon: youtube2, href: "https://www.youtube.com/@Coding_with_Shani", label: "YouTube" },
    { icon: instagram2, href: "https://www.instagram.com/sr.coding01/", label: "Instagram" },
    { icon: linkdin2, href: "https://www.linkedin.com/in/balmiki-kumar", label: "LinkedIn" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-16 px-4 bg-gradient-to-br from-background via-background to-muted/20 select-none"
    >
      {/* Mobile Winding Road SVG */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 850"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mobileRoadBeam" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="oklch(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="oklch(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="oklch(var(--accent))" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Road ribbon */}
          <path
            id="mobileRoadMasterPath"
            d="M 280,100 C 360,220 340,380 200,480 C 80,580 40,700 24,850"
            stroke="oklch(var(--border) / 0.4)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Inner road */}
          <path
            d="M 280,100 C 360,220 340,380 200,480 C 80,580 40,700 24,850"
            stroke="oklch(var(--card) / 0.6)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Dashed center */}
          <path
            d="M 280,100 C 360,220 340,380 200,480 C 80,580 40,700 24,850"
            stroke="oklch(var(--muted-foreground) / 0.4)"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
          {/* Beam */}
          <path
            d="M 280,100 C 360,220 340,380 200,480 C 80,580 40,700 24,850"
            stroke="url(#mobileRoadBeam)"
            strokeWidth="3"
            strokeDasharray="60 300"
            className="animate-hero-road-flow"
          />
        </svg>
      </div>

      <div className="w-full max-w-md mx-auto text-center relative z-10 space-y-6">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-foreground/80">
            AVAILABLE FOR HIRE
          </span>
        </div>

        {/* Profile Card */}
        <div className="flex justify-center my-2">
          <div className="p-[2px] bg-gradient-to-r from-primary via-accent to-primary animate-gradient rounded-[6px] shadow-xl">
            <div className="flip-wrapper w-[210px] h-[260px]">
              <div
                className={`flip-card cursor-pointer ${flipped ? "flipped" : ""}`}
                onClick={() => setFlipped(!flipped)}
              >
                <div className="flip-face front p-2 bg-card">
                  <img
                    src={shani}
                    alt="Balmiki Kumar"
                    className="w-full h-full object-cover object-top rounded-[4px]"
                  />
                </div>
                <div className="flip-face back p-4 bg-card text-left flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-primary mb-2">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Balmiki.sh</span>
                    </div>
                    <p className="text-xs font-bold text-foreground">B.Tech CSE Scholar</p>
                    <p className="text-[10px] text-muted-foreground">ADTU Guwahati (2023-2027)</p>
                    <p className="text-[10px] text-foreground/80 mt-2">Full-Stack MERN & Systems Builder</p>
                  </div>
                  <span className="text-[10px] text-primary font-mono font-bold">Tap to flip back</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div>
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground block mb-1">
            WELCOME TO MY PORTFOLIO
          </span>
          <h1 className="text-3xl font-black tracking-tight mb-2">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Balmiki Kumar
            </span>
          </h1>
          <div className="min-h-[2.8rem] flex items-center justify-center">
            <TypingHeading />
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed px-2">
          Building scalable full-stack software, developer tools, and database systems that solve real-world problems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
          <Button
            size="default"
            onClick={() => scrollToSection("projects")}
            className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-xs py-5 rounded-[4px] shadow-md"
          >
            <ExternalLink className="mr-2 h-3.5 w-3.5" />
            My Projects
          </Button>

          <Button
            size="default"
            variant="outline"
            onClick={handleDownloadCV}
            className="w-full border-primary/40 font-bold text-xs py-5 rounded-[4px]"
          >
            <Download className="mr-2 h-3.5 w-3.5" />
            Download CV
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 justify-center pt-1">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 flex items-center justify-center bg-card border border-border/70 rounded-[4px] shadow-sm hover:border-primary"
            >
              <img src={social.icon} alt={social.label} className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Road Connection Portal */}
        <div className="pt-4">
          <button
            onClick={() => scrollToSection("journey")}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/40 bg-card/80 backdrop-blur-sm text-[11px] font-mono font-bold tracking-wider uppercase text-foreground"
          >
            <Navigation className="w-3 h-3 text-primary animate-bounce" />
            <span>Follow Road to Roots</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;