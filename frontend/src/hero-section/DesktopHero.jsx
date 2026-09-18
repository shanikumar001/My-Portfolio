import React, { useState, useEffect } from "react";
import frontImage from "../assets/shani4.png";
import backImage from "../assets/shani4.png";
import instagram2 from "../assets/icon/instagram2.png";
import youtube2 from "../assets/icon/youtube2.png";
import linkdin2 from "../assets/icon/linkdin2.png";
import { Button } from "@/components/ui/button";
import {
  Download,
  ExternalLink,
  Code2,
  Link2,
  Database,
  Palette,
  Terminal,
  ArrowRight,
  ArrowDown,
  Navigation,
  MapPin,
  Sparkles
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import TypingHeading from "../components/ui/headingAnimation";

const DesktopHero = ({ scrollToSection: externalScrollToSection }) => {
  const [flipped, setFlipped] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setFlipped(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const scrollToSection = (id) => {
    if (externalScrollToSection) {
      externalScrollToSection(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
      className="flex justify-center items-center bg-gradient-to-br from-background via-background to-muted/10 pt-20 pb-0 select-none overflow-hidden min-h-[90vh] max-w-8xl"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[8%] w-[28rem] h-[28rem] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] w-[32rem] h-[32rem] bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#000_1px,transparent_1px)] dark:bg-[radial-gradient(ellipse_at_center,#fff_1px,transparent_1px)] opacity-[0.025] dark:opacity-[0.04] bg-[size:28px_28px]" />
      </div>

      {/* ==================================================================== */}
      {/* MAIN CONTAINER: Locks both content and road SVG to same width        */}
      {/* ==================================================================== */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full mt-10">

        {/* ------------------------------------------------------------------ */}
        {/* WINDING HIGHWAY ROAD (Curves from profile into bottom center)       */}
        {/* ------------------------------------------------------------------ */}

        {
          // {
          //           <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
          //   <svg
          //     className="w-full h-full"
          //     viewBox="0 0 1000 520"
          //     fill="none"
          //     preserveAspectRatio="none"
          //     xmlns="http://www.w3.org/2000/svg"
          //   >
          //     <defs>
          //       <linearGradient id="heroRoadBeam" x1="0%" y1="0%" x2="100%" y2="100%">
          //         <stop offset="0%" stopColor="oklch(var(--primary))" stopOpacity="0" />
          //         <stop offset="50%" stopColor="oklch(var(--primary))" stopOpacity="1" />
          //         <stop offset="100%" stopColor="oklch(var(--accent))" stopOpacity="0" />
          //       </linearGradient>
          //     </defs>

          //     {/* Road Outer Highway Ribbon */}
          //     <path
          //       id="desktopHeroRoadPath"
          //       d="M 800,80 C 900,180 860,320 720,380 C 600,430 500,450 500,520"
          //       stroke="oklch(var(--border) / 0.45)"
          //       strokeWidth="16"
          //       strokeLinecap="round"
          //     />

          //     {/* Inner Asphalt Road */}
          //     <path
          //       d="M 800,80 C 900,180 860,320 720,380 C 600,430 500,450 500,520"
          //       stroke="oklch(var(--card) / 0.65)"
          //       strokeWidth="12"
          //       strokeLinecap="round"
          //     />

          //     {/* Center Dashed Lane Marker */}
          //     <path
          //       d="M 800,80 C 900,180 860,320 720,380 C 600,430 500,450 500,520"
          //       stroke="oklch(var(--muted-foreground) / 0.45)"
          //       strokeWidth="1.5"
          //       strokeDasharray="6 8"
          //       strokeLinecap="round"
          //     />

          //     {/* Luminous Animated Beam */}
          //     <path
          //       d="M 800,80 C 900,180 860,320 720,380 C 600,430 500,450 500,520"
          //       stroke="url(#heroRoadBeam)"
          //       strokeWidth="3"
          //       strokeDasharray="70 280"
          //       className="animate-hero-road-flow"
          //     />

          //     {/* TRAVELER VEHICLE (Smoothly drives along curve to bottom center) */}
          //     <g className="hero-traveler-vehicle">
          //       <animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto">
          //         <mpath href="#desktopHeroRoadPath" />
          //       </animateMotion>
          //       <circle r="12" fill="oklch(var(--primary) / 0.25)" />
          //       <circle r="7.5" fill="oklch(var(--primary))" stroke="oklch(var(--card))" strokeWidth="2" />
          //       <polygon points="-2.5,-2.5 4,0 -2.5,2.5" fill="oklch(var(--primary-foreground))" />
          //     </g>
          //   </svg>
          // </div>
          // }
        }

        {/* ------------------------------------------------------------------ */}
        {/* TWO-COLUMN BALANCED CONTENT GRID                                    */}
        {/* ------------------------------------------------------------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10 py-6">

          {/* LEFT COLUMN: HERO TEXT & ACTIONS */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 backdrop-blur-md mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-foreground/85">
                AVAILABLE FOR HIRE & FULL-STACK PROJECTS
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="mb-3.5 flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-muted-foreground">
                Hi, I'm
              </span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Balmiki Kumar
              </span>
            </h1>

            {/* Typing Heading / Role */}
            <div className="mb-5 min-h-[3rem] flex items-center justify-center lg:justify-start">
              <TypingHeading />
            </div>

            {/* Narrative Description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg mb-6">
              Building scalable software, developer productivity tools, and distributed database systems that solve real-world problems. Focused on robust full-stack architecture and clean system design.
            </p>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-7 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-[3px] bg-card/70 border border-border/60 text-foreground/85">React & Next.js</span>
              <span className="px-2.5 py-1 rounded-[3px] bg-card/70 border border-border/60 text-foreground/85">Node & Express</span>
              <span className="px-2.5 py-1 rounded-[3px] bg-card/70 border border-border/60 text-foreground/85">MongoDB & SQL</span>
              <span className="px-2.5 py-1 rounded-[3px] bg-card/70 border border-border/60 text-foreground/85">Web3 & Solidity</span>
              <span className="px-2.5 py-1 rounded-[3px] bg-primary/10 border border-primary/30 text-primary font-bold">ZiuroDB</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3.5 mb-7 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="
                  relative overflow-hidden group
                  bg-gradient-to-r from-primary to-accent text-primary-foreground
                  font-bold tracking-wide
                  px-7 py-6
                  rounded-[4px]
                  shadow-lg shadow-primary/20
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30
                "
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View Projects
              </Button>

              <Button
                onClick={handleDownloadCV}
                size="lg"
                variant="outline"
                className="
                  border-2 border-primary/30 dark:border-primary/40 bg-card/50 backdrop-blur-sm
                  font-bold tracking-wide
                  px-7 py-6
                  rounded-[4px]
                  transition-all duration-300
                  hover:bg-primary hover:text-primary-foreground hover:border-primary
                  hover:-translate-y-0.5 hover:shadow-md
                "
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </Button>

              <Button
                onClick={() => scrollToSection("journey")}
                size="lg"
                variant="ghost"
                className="
                  border border-border/60 bg-card/40 backdrop-blur-sm
                  font-mono text-xs font-bold tracking-wider uppercase
                  px-5 py-6
                  rounded-[4px]
                  hover:border-primary/40
                  transition-all duration-300
                  group
                "
              >
                <Navigation className="mr-2 h-4 w-4 text-primary group-hover:rotate-45 transition-transform" />
                Trace Road ↓
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    w-10 h-10
                    flex items-center justify-center
                    bg-card/80 dark:bg-card/60 backdrop-blur-sm
                    border border-border/70
                    rounded-[4px]
                    shadow-sm
                    transition-all duration-300
                    hover:scale-110 hover:border-primary hover:shadow-md
                    cursor-pointer
                  "
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-4 h-4 transition-transform duration-300 ease-out"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: 3D PROFILE FLIP CARD & FLOATING TECH BADGES */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6 border ml-20">

            {/* Floating Tech Badges (Tightly anchored around the card) */}
            {/* <div className="absolute -top-3 -left-4 sm:-left-6 z-20 bg-card/90 dark:bg-card/85 backdrop-blur-md border border-border/60 px-3 py-1.5 rounded-[4px] shadow-lg flex items-center gap-2 animate-float-1 select-none">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <Code2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold tracking-wide">MERN Stack</span>
            </div>

            <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 z-20 bg-card/90 dark:bg-card/85 backdrop-blur-md border border-border/60 px-3 py-1.5 rounded-[4px] shadow-lg flex items-center gap-2 animate-float-2 select-none">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <Palette className="w-3.5 h-3.5 text-accent" />
              <span className="text-[11px] font-bold tracking-wide">UI/UX Designer</span>
            </div>

            <div className="absolute -bottom-3 -left-4 sm:-left-6 z-20 bg-card/90 dark:bg-card/85 backdrop-blur-md border border-border/60 px-3 py-1.5 rounded-[4px] shadow-lg flex items-center gap-2 animate-float-3 select-none">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <Link2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold tracking-wide">Web3 & Solidity</span>
            </div> */}

            {/* Profile Card Frame */}
            <div className="p-[2.5px] bg-gradient-to-r from-primary via-accent to-primary animate-gradient rounded-[6px] hover:scale-[1.015] hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ease-out select-none">
              <div className="flip-wrapper w-[290px] h-[390px] sm:w-[330px] sm:h-[430px] lg:w-[360px] lg:h-[470px]">
                <div
                  className={`flip-card cursor-pointer ${flipped ? "flipped" : ""}`}
                  onClick={() => setFlipped(!flipped)}
                >
                  {/* FRONT FACE */}
                  <div className="flip-face front p-5 flex flex-col justify-between items-center text-center relative overflow-hidden bg-card/95">
                    <div className="h-[88%] w-full rounded-[4px] overflow-hidden bg-muted/20 flex items-center justify-center border border-border/30">
                      <img
                        src={frontImage}
                        alt="Balmiki Kumar"
                        className="h-full w-full object-cover object-top"
                        loading="eager"
                      />
                    </div>

                    <div className="flex items-center justify-between w-full px-2 pt-2 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1 font-mono">
                        <MapPin className="w-3 h-3 text-primary" /> Bihar ➔ Assam
                      </span>
                      <span className="text-primary font-bold hover:underline flex items-center gap-1">
                        Flip Profile <ArrowRight className="w-3 h-3 animate-bounce" />
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE (Terminal HUD Profile) */}
                  <div className="flip-face back p-6 flex flex-col justify-between items-stretch text-left relative overflow-hidden bg-card/95">
                    <div className="flex items-center justify-between border-b border-border/40 pb-3">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-primary" />
                        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                          dev_profile.sh
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground">B.TECH CSE</span>
                    </div>

                    <div className="space-y-3.5 my-3 text-xs">
                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">
                          ACADEMIC PURSUIT
                        </span>
                        <h4 className="font-bold text-foreground">Assam Down Town University</h4>
                        <p className="text-[11px] text-muted-foreground">Computer Science & Engineering (2023-2027)</p>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block mb-1.5">
                          CORE SPECIALTIES
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="p-1.5 rounded-[3px] bg-muted/40 border border-border/40 flex items-center gap-1.5 text-[11px]">
                            <Code2 className="w-3 h-3 text-primary" />
                            <span>Full-Stack MERN</span>
                          </div>
                          <div className="p-1.5 rounded-[3px] bg-muted/40 border border-border/40 flex items-center gap-1.5 text-[11px]">
                            <Database className="w-3 h-3 text-accent" />
                            <span>ZiuroDB Engine</span>
                          </div>
                          <div className="p-1.5 rounded-[3px] bg-muted/40 border border-border/40 flex items-center gap-1.5 text-[11px]">
                            <Palette className="w-3 h-3 text-pink-500" />
                            <span>UI/UX & Design</span>
                          </div>
                          <div className="p-1.5 rounded-[3px] bg-muted/40 border border-border/40 flex items-center gap-1.5 text-[11px]">
                            <Link2 className="w-3 h-3 text-emerald-500" />
                            <span>Web3 & Solidity</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">
                          CURRENT FOCUS
                        </span>
                        <p className="text-[11px] text-foreground/80 leading-snug">
                          Building ZiuroDB, practicing System Design, & scalable distributed backends.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-border/40 pt-2.5 flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">Patna ➔ Guwahati</span>
                      <span className="text-primary font-mono font-bold flex items-center gap-1">
                        Flip Back <ArrowRight className="w-3 h-3 rotate-180" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DesktopHero;
