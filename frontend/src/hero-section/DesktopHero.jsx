import React, { useState, useEffect, useRef } from "react";
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
  Sparkles,
  GraduationCap,
  RotateCw,
  ShieldCheck,
  Layers
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import TypingHeading from "../components/ui/headingAnimation";
import { useProfile } from "../hooks/usePortfolio";
import InteractiveGridBackground from "../components/ui/InteractiveGridBackground";

const DesktopHero = ({ scrollToSection: externalScrollToSection }) => {
  const heroRef = useRef(null);
  const [flipped, setFlipped] = useState(false);
  const { resolvedTheme } = useTheme();
  const { data: profile } = useProfile();

  const name = profile?.name || "Shani Kumar";
  const statusPill = profile?.statusPill || "FOUNDER @ ZIURODB & ZIUROCODING | B.TECH CSE (CGPA: 9.05)";
  const bio = profile?.bio || "Founder of ZiuroDB and ZiuroCoding. Building production-ready database management platforms, automated REST API engines, code execution sandboxes, and modern full-stack systems.";
  const techChips = profile?.techChips && profile.techChips.length > 0 ? profile.techChips : [
    "Java & Python",
    "React & Next.js",
    "TypeScript & Node.js",
    "MongoDB, MySQL & Postgres",
    "Redis, BullMQ & Docker",
    "ZiuroDB"
  ];
  const avatarImage = profile?.avatarUrl || frontImage;
  const resumeUrl = profile?.resumeUrl || "/cv.pdf";
  const typingTitles = profile?.typingTitles;

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
    window.open(resumeUrl, "_blank") || alert("CV download will be available soon!");
  };

  const socialLinks = [
    { icon: youtube2, href: profile?.socialLinks?.youtube || "https://www.youtube.com/@Coding_with_Shani", label: "YouTube" },
    { icon: instagram2, href: profile?.socialLinks?.instagram || "https://www.instagram.com/sr.coding01/", label: "Instagram" },
    { icon: linkdin2, href: profile?.socialLinks?.linkedin || "https://www.linkedin.com/in/Shani-kumar", label: "LinkedIn" },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="flex justify-center items-center relative bg-background pt-20 pb-0 select-none overflow-hidden min-h-[90vh] w-full"
    >
      {/* Interactive Cursor-Reactive Square Box Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <InteractiveGridBackground gridSize={48} containerRef={heroRef} />

        {/* Subtle top blend */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent pointer-events-none" />

        {/* Subtle Ambient glows */}
        <div className="absolute top-[10%] left-[8%] w-[28rem] h-[28rem] bg-foreground/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[32rem] h-[32rem] bg-foreground/5 rounded-full blur-3xl pointer-events-none" />
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
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 backdrop-blur-md mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-foreground/85">
                {statusPill}
              </span>
            </div> */}

            {/* Name & Title */}
            <h1 className="mb-3.5 flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-muted-foreground">
                Hi, I'm
              </span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {name}
              </span>
            </h1>

            {/* Typing Heading / Role */}
            <div className="mb-5 min-h-[3rem] flex items-center justify-center lg:justify-start">
              <TypingHeading titles={typingTitles} />
            </div>

            {/* Narrative Description */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg mb-6">
              {bio}
            </p>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-7 text-xs font-mono">
              {techChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-[3px] bg-card/70 border border-border/60 text-foreground/85"
                >
                  {chip}
                </span>
              ))}
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

          {/* RIGHT COLUMN: MODERN 3D PROFILE HUD & PHOTO PRESENTATION */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4 lg:py-6">

            {/* Ambient Lighting Glow Behind Frame */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 via-accent/20 to-emerald-500/15 rounded-[42px] blur-3xl opacity-60 dark:opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

            {/* Floating Glassmorphic 3D Micro-Badges */}
            {/* Top-Left Badge: Founder status */}
            {/* <div className="hidden sm:flex absolute -top-4 -left-3 sm:-left-6 z-30 bg-card/90 dark:bg-card/85 backdrop-blur-xl border border-border/70 dark:border-white/10 px-3 py-2 rounded-2xl shadow-xl shadow-primary/10 items-center gap-2.5 select-none animate-float-1 pointer-events-none">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-500">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-foreground leading-tight flex items-center gap-1">
                  ZiuroDB <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono font-bold">Founder</span>
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">DB & REST Engine</span>
              </div>
            </div> */}

            {/* Mid-Right Badge: Academic Excellence */}
            {/* <div className="hidden sm:flex absolute top-1/2 -right-3 sm:-right-8 -translate-y-1/2 z-30 bg-card/90 dark:bg-card/85 backdrop-blur-xl border border-border/70 dark:border-white/10 px-3 py-2 rounded-2xl shadow-xl shadow-primary/10 items-center gap-2.5 select-none animate-float-2 pointer-events-none">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-500">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-foreground leading-tight flex items-center gap-1">
                  ADTU B.Tech <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">CGPA: 9.05 / 10</span>
              </div>
            </div> */}

            {/* Bottom-Left Badge: Engineering Stack */}
            {/* <div className="hidden sm:flex absolute -bottom-4 -left-2 sm:-left-5 z-30 bg-card/90 dark:bg-card/85 backdrop-blur-xl border border-border/70 dark:border-white/10 px-3 py-2 rounded-2xl shadow-xl shadow-primary/10 items-center gap-2.5 select-none animate-float-3 pointer-events-none">
              <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-500">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-foreground leading-tight">Full-Stack & AI</span>
                <span className="text-[10px] text-muted-foreground font-mono">React • Node • ML</span>
              </div>
            </div> */}

            {/* Modern Glass Chassis with Gradient Rim */}
            <div className="relative group p-[2px] rounded-[5px] bg-gradient-to-b from-primary/50 via-accent/30 to-border/40 hover:from-primary hover:via-accent hover:to-primary transition-all duration-500 shadow-2xl hover:shadow-primary/20 select-none">
              <div className="flip-wrapper w-[285px] h-[395px] sm:w-[325px] sm:h-[445px] lg:w-[350px] lg:h-[475px] xl:w-[365px] xl:h-[490px]">
                <div
                  className={`flip-card cursor-pointer ${flipped ? "flipped" : ""}`}
                  onClick={() => setFlipped(!flipped)}
                >
                  {/* FRONT FACE: MODERN PHOTO HUD */}
                  <div className="flip-face front p-3 sm:p-3.5 flex flex-col justify-between items-stretch text-center relative overflow-hidden bg-card/90 dark:bg-card/85 backdrop-blur-xl">

                    {/* Top HUD Header Bar */}
                    <div className="flex items-center justify-between w-full px-2 py-1 mb-1 z-10">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-[20px] bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground uppercase">
                          Shani Kumar
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFlipped(!flipped);
                        }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 backdrop-blur-md text-[10px] font-mono font-bold transition-all hover:scale-105 active:scale-95 shadow-sm"
                        title="Flip 3D Profile"
                      >
                        <RotateCw className="w-3 h-3 text-primary animate-spin-slow" />
                        <span>3D Flip</span>
                      </button>
                    </div>

                    {/* Edge-to-Edge Portrait Frame */}
                    <div className="relative flex-1 w-full rounded-[4px] overflow-hidden bg-gradient-to-b from-muted/20 to-card border border-border/40 shadow-inner group/img">
                      <img
                        src={avatarImage}
                        alt={name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        loading="eager"
                      />

                      {/* Camera / HUD Corner Reticles */}
                      <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-primary/60 rounded-tl-sm pointer-events-none" />
                      <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-primary/60 rounded-tr-sm pointer-events-none" />
                      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-primary/60 rounded-bl-sm pointer-events-none" />
                      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-primary/60 rounded-br-sm pointer-events-none" />

                      {/* Soft bottom gradient scrim */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />

                      {/* Floating HUD Pill inside photo */}
                      <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between px-3 py-1.5 rounded-xl bg-card/85 dark:bg-card/80 backdrop-blur-md border border-border/70 shadow-lg text-[11px] pointer-events-none">
                        <span className="flex items-center gap-1.5 font-mono text-muted-foreground">
                          <MapPin className="w-3 h-3 text-primary" /> Bihar ➔ Assam
                        </span>
                        <span className="font-mono font-bold text-foreground flex items-center gap-1">
                          ADTU '28 <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        </span>
                      </div>
                    </div>

                    {/* Bottom Metadata Bar */}
                    <div className="flex items-center justify-between w-full px-2 pt-2 text-[11px]">
                      <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                        <Terminal className="w-3 h-3 text-primary" /> Founder & Full-Stack
                      </span>
                      <span className="text-primary font-mono text-[11px] font-bold flex items-center gap-1 group-hover:underline">
                        Credentials <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE: HIGH-TECH DEVELOPER TERMINAL */}
                  <div className="flip-face back p-5 sm:p-6 flex flex-col justify-between items-stretch text-left relative overflow-hidden bg-card/95 dark:bg-card/90 backdrop-blur-2xl">

                    {/* Window Title Bar */}
                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-foreground/90 pl-1">
                          Shani@ziurodb:~#
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-semibold">
                        VERIFIED PROFILE
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-3.5 my-2.5 text-xs overflow-y-auto pr-0.5">
                      {/* Academic Pursuit */}
                      <div className="p-2.5 rounded-xl bg-muted/30 border border-border/50">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                            <GraduationCap className="w-3 h-3 text-primary" /> EDUCATION
                          </span>
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                            CGPA: 9.05
                          </span>
                        </div>
                        <h4 className="font-bold text-foreground text-xs leading-snug">
                          Assam Down Town University
                        </h4>
                        <p className="text-[11px] text-muted-foreground">
                          B.Tech Computer Science & Engineering • Expected 2028
                        </p>
                      </div>

                      {/* Core Ventures */}
                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block mb-1.5">
                          CORE PLATFORMS
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="p-2 rounded-xl bg-muted/20 border border-border/40 flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5 text-primary font-bold text-[11px]">
                              <Database className="w-3 h-3" />
                              <span>ZiuroDB</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground line-clamp-2 leading-tight">
                              DB platform & instant REST API engine with Ziuro-AI.
                            </p>
                          </div>
                          <div className="p-2 rounded-xl bg-muted/20 border border-border/40 flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5 text-accent font-bold text-[11px]">
                              <Code2 className="w-3 h-3" />
                              <span>ZiuroCoding</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground line-clamp-2 leading-tight">
                              Monaco tests & Redis sandbox runner.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Stack Pills */}
                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block mb-1.5">
                          TECH PROFICIENCY
                        </span>
                        <div className="flex flex-wrap gap-1 text-[10px] font-mono">
                          <span className="px-2 py-0.5 rounded-md bg-card border border-border/60 text-foreground/80">Java</span>
                          <span className="px-2 py-0.5 rounded-md bg-card border border-border/60 text-foreground/80">Python</span>
                          <span className="px-2 py-0.5 rounded-md bg-card border border-border/60 text-foreground/80">React/Next</span>
                          <span className="px-2 py-0.5 rounded-md bg-card border border-border/60 text-foreground/80">Docker</span>
                          <span className="px-2 py-0.5 rounded-md bg-card border border-border/60 text-foreground/80">Redis</span>
                          <span className="px-2 py-0.5 rounded-md bg-card border border-border/60 text-foreground/80">Postgres</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Return Strip */}
                    <div className="border-t border-border/50 pt-2.5 flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground font-mono">Guwahati, Assam</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFlipped(false);
                        }}
                        className="text-primary font-mono font-bold flex items-center gap-1 hover:underline"
                      >
                        <RotateCw className="w-3 h-3" /> Flip to Photo
                      </button>
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
