import React, { useState } from "react";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Code2,
  Link2,
  Palette,
  MapPin,
  Terminal,
  ArrowRight,
  Navigation,
  Sparkles,
  GraduationCap,
  RotateCw,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import shani from "../assets/shani4.png";
import instagram2 from "../assets/icon/instagram2.png";
import youtube2 from "../assets/icon/youtube2.png";
import linkdin2 from "../assets/icon/linkdin2.png";
import TypingHeading from "../components/ui/headingAnimation";

const MobileHero = ({ scrollToSection }) => {
  const [flipped, setFlipped] = useState(false);

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
            FOUNDER @ ZIURODB & ZIUROCODING | CGPA: 9.05
          </span>
        </div>

        {/* Modern Profile Photo Card */}
        <div className="flex justify-center my-2 relative">
          {/* Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-accent/20 to-emerald-500/20 rounded-[32px] blur-2xl opacity-60 dark:opacity-40 pointer-events-none -z-10" />

          <div className="p-[2px] bg-gradient-to-b from-primary/50 via-accent/30 to-border/40 rounded-[26px] shadow-2xl">
            <div className="flip-wrapper w-[250px] h-[340px]">
              <div
                className={`flip-card cursor-pointer ${flipped ? "flipped" : ""}`}
                onClick={() => setFlipped(!flipped)}
              >
                {/* FRONT FACE */}
                <div className="flip-face front p-2.5 flex flex-col justify-between items-stretch text-center relative overflow-hidden bg-card/90 dark:bg-card/85 backdrop-blur-xl">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between w-full px-1 py-0.5 mb-1 z-10">
                    <span className="text-[9px] font-mono font-bold text-muted-foreground uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Balmiki Kumar
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[9px] font-mono font-bold">
                      <RotateCw className="w-2.5 h-2.5" /> 3D Flip
                    </span>
                  </div>

                  {/* Photo Frame */}
                  <div className="relative flex-1 w-full rounded-[18px] overflow-hidden bg-gradient-to-b from-muted/20 to-card border border-border/40 shadow-inner">
                    <img
                      src={shani}
                      alt="Balmiki Kumar"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />

                    {/* Camera Corner Marks */}
                    <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-primary/60 rounded-tl-sm pointer-events-none" />
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-primary/60 rounded-tr-sm pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-primary/60 rounded-bl-sm pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-primary/60 rounded-br-sm pointer-events-none" />

                    {/* Bottom gradient scrim */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />

                    {/* Floating HUD Pill inside photo */}
                    <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-2.5 py-1 rounded-lg bg-card/85 dark:bg-card/80 backdrop-blur-md border border-border/70 shadow-md text-[10px] pointer-events-none">
                      <span className="flex items-center gap-1 font-mono text-muted-foreground">
                        <MapPin className="w-2.5 h-2.5 text-primary" /> Bihar ➔ Assam
                      </span>
                      <span className="font-mono font-bold text-foreground flex items-center gap-1">
                        ADTU '28 <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      </span>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="flex items-center justify-between w-full px-1 pt-1.5 text-[10px]">
                    <span className="text-muted-foreground font-mono">Founder & Developer</span>
                    <span className="text-primary font-mono font-bold flex items-center gap-0.5">
                      Credentials <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="flip-face back p-4 bg-card/95 dark:bg-card/90 backdrop-blur-xl text-left flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-border/40 pb-2 mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-primary">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>balmiki@ziurodb</span>
                      </div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">
                        CGPA: 9.05
                      </span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div>
                        <p className="text-xs font-bold text-foreground">Assam Down Town University</p>
                        <p className="text-[10px] text-muted-foreground">B.Tech CSE • Expected 2028</p>
                      </div>

                      <div className="p-1.5 rounded-lg bg-muted/30 border border-border/40">
                        <p className="font-bold text-primary text-[10px]">ZiuroDB & ZiuroCoding</p>
                        <p className="text-[9px] text-muted-foreground">DB & API Engine | Monaco Code Runner</p>
                      </div>

                      <div className="flex flex-wrap gap-1 text-[9px] font-mono pt-1">
                        <span className="px-1.5 py-0.5 rounded bg-card border border-border/60">Java</span>
                        <span className="px-1.5 py-0.5 rounded bg-card border border-border/60">Python</span>
                        <span className="px-1.5 py-0.5 rounded bg-card border border-border/60">React</span>
                        <span className="px-1.5 py-0.5 rounded bg-card border border-border/60">Docker</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border/40 pt-2 flex items-center justify-between text-[9px]">
                    <span className="text-muted-foreground">Bihar ➔ Guwahati</span>
                    <span className="text-primary font-mono font-bold flex items-center gap-1">
                      <RotateCw className="w-2.5 h-2.5" /> Flip to Photo
                    </span>
                  </div>
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
          Founder of ZiuroDB and ZiuroCoding. Building production-ready database management platforms, code execution engines, and full-stack software systems.
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