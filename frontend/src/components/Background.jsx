import React, { useState, useEffect, useRef } from "react";
import "./background.css";
import bihar from "../assets/images/bihar.jpg";
import bihar2 from "../assets/images/bihar2.jpg";
import bihar3 from "../assets/images/bihar3.jpg";
import sutara from "../assets/images/sutara.jpg";
import jai from "../assets/images/jai.jpg";
import clg from "../assets/images/down.jpg";
import clg2 from "../assets/images/d.jpg";
import clg3 from "../assets/images/do.jpg";
import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Building2,
  Compass,
  CheckCircle2,
  Navigation as NavigationIcon,
  Flag,
  Milestone
} from "lucide-react";

const MyBackground = () => {
  const stateimages = [bihar, bihar2, bihar3];
  const [bigImage, setBigImage] = useState(stateimages[0]);

  const clgimages = [clg, clg2, clg3];
  const [clGImage, setClgImage] = useState(clgimages[0]);

  // Section reference to compute scroll road progress
  const sectionRef = useRef(null);
  const roadTrackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track which checkpoint nodes have been activated
  const [activeNodes, setActiveNodes] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  // Calculate smooth road progression based on viewport scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !roadTrackRef.current) return;
      const roadRect = roadTrackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Traveler leads cursor as it passes through the viewport center
      const triggerOffset = windowHeight * 0.55;
      const traveled = triggerOffset - roadRect.top;
      const totalRoadLength = roadRect.height;

      const progress = Math.min(Math.max(traveled / totalRoadLength, 0), 1);
      setScrollProgress(progress);

      // Checkpoint trigger milestones along the road
      setActiveNodes({
        1: progress >= 0.08,
        2: progress >= 0.34,
        3: progress >= 0.62,
        4: progress >= 0.88,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="journey-section pt-0 pb-24 sm:pb-32 relative overflow-hidden bg-background text-foreground select-none"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] absolute top-[5%] -left-[100px]" />
        <div className="w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] absolute top-[40%] -right-[150px]" />
        <div className="w-[550px] h-[550px] bg-primary/10 rounded-full blur-[100px] absolute bottom-[5%] left-[20%]" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(ellipse_at_center,#000_1px,transparent_1px)] dark:bg-[radial-gradient(ellipse_at_center,#fff_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-8xl relative">
        {/* ==================================================================== */}
        {/* ROAD TIMELINE HIGHWAY CONTAINER */}
        {/* ==================================================================== */}
        <div className="relative">

          {/* DESKTOP CENTER ROAD TRACK */}
          <div
            ref={roadTrackRef}
            className="hidden lg:block journey-road-track left-1/2 -translate-x-1/2"
          >
            {/* Center Dashed Highway Line */}
            <div className="journey-road-divider" />
            {/* Road Progress Fill */}
            <div
              className="journey-road-progress"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* MOBILE LEFT ROAD TRACK */}
          <div className="block lg:hidden journey-road-track left-6 sm:left-8">
            <div className="journey-road-divider" />
            <div
              className="journey-road-progress"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* ROAD TRAVELER BEACON (Moves down the road with scroll) */}
          {/* Desktop Traveler */}
          <div
            className="hidden lg:block road-traveler"
            style={{
              top: `calc(40px + ${scrollProgress} * (100% - 120px))`,
            }}
          >
            <div className="relative flex items-center justify-center">
              <div className="traveler-puck">
                <NavigationIcon className="w-5 h-5 fill-current transform rotate-[135deg]" />
              </div>
              <div className="traveler-shockwave" />
            </div>
          </div>

          {/* Mobile Traveler */}
          <div
            className="block lg:hidden road-traveler"
            style={{
              left: "24px",
              top: `calc(40px + ${scrollProgress} * (100% - 120px))`,
            }}
          >
            <div className="relative flex items-center justify-center">
              <div className="traveler-puck w-8 h-8">
                <NavigationIcon className="w-4 h-4 fill-current transform rotate-[135deg]" />
              </div>
              <div className="traveler-shockwave" />
            </div>
          </div>

          {/* ================================================================== */}
          {/* TREE BRANCH ROWS (Alternating Right -> Left -> Right -> Left) */}
          {/* ================================================================== */}
          <div className="space-y-24 sm:space-y-32 lg:space-y-40">

            {/* ---------------------------------------------------------------- */}
            {/* ROW 1: CARD ON RIGHT | SIGNBOARD ON LEFT */}
            {/* ---------------------------------------------------------------- */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[340px]">
              {/* Checkpoint Node on Central Road */}
              <div className="absolute left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 top-4 lg:top-1/2 lg:-translate-y-1/2 z-20">
                <div className={`checkpoint-node ${activeNodes[1] ? "active" : ""}`}>
                  <MapPin className={`w-5 h-5 transition-colors ${activeNodes[1] ? "text-primary" : "text-muted-foreground"}`} />
                </div>
              </div>

              {/* Branch Connector Line to Right Card (Desktop) */}
              <div
                className={`hidden lg:block tree-branch-line left-1/2 w-[42px] ${activeNodes[1] ? "active" : ""
                  }`}
              />

              {/* LEFT COLUMN: Milestone Signboard (Desktop) */}
              <div className="w-full lg:w-[calc(50%-42px)] hidden lg:flex justify-end pr-8">
                <div
                  className={`milestone-signboard text-right ${activeNodes[1] ? "is-revealed" : ""
                    }`}
                >
                  <span className="text-[10px] font-mono tracking-[2px] uppercase text-primary font-bold block mb-1">
                    WAYPOINT 01 // ORIGIN & ROOTS
                  </span>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] border border-primary/40 bg-card/80 dark:bg-card/50 backdrop-blur-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <h4 className="text-base font-mono font-black tracking-wider uppercase text-foreground">
                      I AM FROM BIHAR
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 max-w-[280px] ml-auto font-mono">
                    Cultural capital, ancient Nalanda, & the Ganges river basin.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: CARD 1 (Bihar) */}
              <div className="w-full lg:w-[calc(50%-42px)] pl-14 sm:pl-16 lg:pl-8">
                {/* Mobile Waypoint Title */}
                <div className="block lg:hidden mb-4">
                  <span className="text-[10px] font-mono tracking-[2px] uppercase text-primary font-bold block mb-1">
                    WAYPOINT 01 // ORIGIN
                  </span>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] border border-primary/40 bg-card/80 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-mono font-black tracking-wider uppercase text-foreground">
                      I AM FROM BIHAR
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`tree-card-wrapper from-right ${activeNodes[1] ? "is-revealed" : ""
                    } rounded-[4px] border border-border/60 bg-card/75 dark:bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden group`}
                >
                  {/* Interactive Big Display Image */}
                  <div className="relative w-full h-[220px] overflow-hidden border-b border-border/40 group/img">
                    <img
                      src={bigImage}
                      alt="Bihar Heritage"
                      className="w-full h-full object-cover gallery-display-img group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-[3px] border border-white/10">
                        Patna & Ganges
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase border border-border/60 bg-muted/40 px-2 py-0.5 rounded-[3px] text-foreground/85">
                        <MapPin className="w-3 h-3 text-primary" /> PATNA, BIHAR
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase border border-primary/30 bg-primary/10 px-2 py-0.5 rounded-[3px] text-primary">
                        <Sparkles className="w-3 h-3" /> HOMETOWN
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2.5 text-foreground">
                      Bihar
                    </h3>

                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-4">
                      A state where history, culture, and nature blend beautifully. Bihar shines with ancient monuments like Nalanda and Bodh Gaya, lush green plains, and the sacred Ganga.
                    </p>

                    {/* Thumbnail Switcher */}
                    <div className="pt-3 border-t border-border/30 mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-2">
                        Angles & Heritage Views:
                      </span>
                      <div className="flex items-center gap-2">
                        {stateimages.map((img, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setBigImage(img)}
                            aria-label={`View Bihar photo ${index + 1}`}
                            className={`relative w-14 h-9 rounded-[3px] overflow-hidden border-2 transition-all cursor-pointer ${bigImage === img
                              ? "border-primary ring-2 ring-primary/20 scale-105"
                              : "border-border/60 opacity-60 hover:opacity-100"
                              }`}
                          >
                            <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Footer link */}
                    <a
                      href="https://en.wikipedia.org/wiki/Bihar"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground/80 hover:text-primary transition-colors group/link"
                    >
                      <span>Explore Cultural History</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* ROW 2: CARD ON LEFT | SIGNBOARD ON RIGHT */}
            {/* ---------------------------------------------------------------- */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[340px]">
              {/* Checkpoint Node on Central Road */}
              <div className="absolute left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 top-4 lg:top-1/2 lg:-translate-y-1/2 z-20">
                <div className={`checkpoint-node ${activeNodes[2] ? "active" : ""}`}>
                  <BookOpen className={`w-5 h-5 transition-colors ${activeNodes[2] ? "text-primary" : "text-muted-foreground"}`} />
                </div>
              </div>

              {/* Branch Connector Line to Left Card (Desktop) */}
              <div
                className={`hidden lg:block tree-branch-line to-left right-1/2 w-[42px] ${activeNodes[2] ? "active" : ""
                  }`}
              />

              {/* LEFT COLUMN: CARD 2 (Sutara Mehi Mission School) */}
              <div className="w-full lg:w-[calc(50%-42px)] pl-14 sm:pl-16 lg:pl-0 lg:pr-8 order-2 lg:order-1">
                {/* Mobile Waypoint Title */}
                <div className="block lg:hidden mb-4">
                  <span className="text-[10px] font-mono tracking-[2px] uppercase text-primary font-bold block mb-1">
                    WAYPOINT 02 // PRIMARY
                  </span>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] border border-primary/40 bg-card/80 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-mono font-black tracking-wider uppercase text-foreground">
                      I HAVE COMPLETED MY SCHOOLING FROM
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`tree-card-wrapper from-left ${activeNodes[2] ? "is-revealed" : ""
                    } rounded-[4px] border border-border/60 bg-card/75 dark:bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden group`}
                >
                  <div className="relative w-full h-[220px] overflow-hidden border-b border-border/40 group/img">
                    <img
                      src={sutara}
                      alt="Sutara Mehi Mission School"
                      className="w-full h-full object-cover gallery-display-img group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-[3px] border border-white/10">
                        Primary Campus & Trees
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase border border-border/60 bg-muted/40 px-2 py-0.5 rounded-[3px] text-foreground/85">
                        <Calendar className="w-3 h-3 text-primary" /> ESTD 1998
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase border border-border/60 bg-muted/40 px-2 py-0.5 rounded-[3px] text-foreground/85">
                        <MapPin className="w-3 h-3 text-primary" /> PATNA, BIHAR
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase border border-primary/30 bg-primary/10 px-2 py-0.5 rounded-[3px] text-primary">
                        <BookOpen className="w-3 h-3" /> PRIMARY
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2.5 text-foreground">
                      SUTARA MEHI MISSION SCHOOL
                    </h3>

                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-4">
                      My primary school is one of the most memorable milestones of my childhood. Located in a quiet area surrounded by lush greenery, it fostered our curiosity with vibrant classrooms and open playgrounds.
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-foreground/75 pt-3 border-t border-border/30">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-primary rounded-[1px]" />
                        <span>Creative Arts</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-primary rounded-[1px]" />
                        <span>Green Playgrounds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Milestone Signboard (Desktop) */}
              <div className="w-full lg:w-[calc(50%-42px)] hidden lg:flex justify-start pl-8 order-1 lg:order-2">
                <div
                  className={`milestone-signboard text-left ${activeNodes[2] ? "is-revealed" : ""
                    }`}
                >
                  <span className="text-[10px] font-mono tracking-[2px] uppercase text-primary font-bold block mb-1">
                    WAYPOINT 02 // PRIMARY SCHOOLING
                  </span>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] border border-primary/40 bg-card/80 dark:bg-card/50 backdrop-blur-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <h4 className="text-base font-mono font-black tracking-wider uppercase text-foreground">
                      I COMPLETED MY SCHOOLING FROM
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 max-w-[280px] font-mono">
                    Foundational discipline, early reading, and creative curiosity.
                  </p>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* ROW 3: CARD ON RIGHT | SIGNBOARD ON LEFT */}
            {/* ---------------------------------------------------------------- */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[340px]">
              {/* Checkpoint Node on Central Road */}
              <div className="absolute left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 top-4 lg:top-1/2 lg:-translate-y-1/2 z-20">
                <div className={`checkpoint-node ${activeNodes[3] ? "active" : ""}`}>
                  <Building2 className={`w-5 h-5 transition-colors ${activeNodes[3] ? "text-primary" : "text-muted-foreground"}`} />
                </div>
              </div>

              {/* Branch Connector Line to Right Card (Desktop) */}
              <div
                className={`hidden lg:block tree-branch-line left-1/2 w-[42px] ${activeNodes[3] ? "active" : ""
                  }`}
              />

              {/* LEFT COLUMN: Milestone Signboard (Desktop) */}
              <div className="w-full lg:w-[calc(50%-42px)] hidden lg:flex justify-end pr-8">
                <div
                  className={`milestone-signboard text-right ${activeNodes[3] ? "is-revealed" : ""
                    }`}
                >
                  <span className="text-[10px] font-mono tracking-[2px] uppercase text-primary font-bold block mb-1">
                    WAYPOINT 03 // SECONDARY SCHOOL
                  </span>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] border border-primary/40 bg-card/80 dark:bg-card/50 backdrop-blur-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <h4 className="text-base font-mono font-black tracking-wider uppercase text-foreground">
                      SECONDARY EDUCATION
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 max-w-[280px] ml-auto font-mono">
                    Science laboratories, mathematics foundations, and high school benchmarks.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: CARD 3 (Jai Mala Siksha Niketan) */}
              <div className="w-full lg:w-[calc(50%-42px)] pl-14 sm:pl-16 lg:pl-8">
                {/* Mobile Waypoint Title */}
                <div className="block lg:hidden mb-4">
                  <span className="text-[10px] font-mono tracking-[2px] uppercase text-primary font-bold block mb-1">
                    WAYPOINT 03 // SECONDARY
                  </span>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] border border-primary/40 bg-card/80 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-mono font-black tracking-wider uppercase text-foreground">
                      SECONDARY EDUCATION
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`tree-card-wrapper from-right ${activeNodes[3] ? "is-revealed" : ""
                    } rounded-[4px] border border-border/60 bg-card/75 dark:bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden group`}
                >
                  <div className="relative w-full h-[220px] overflow-hidden border-b border-border/40 group/img">
                    <img
                      src={jai}
                      alt="Jai Mala Siksha Niketan"
                      className="w-full h-full object-cover gallery-display-img group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-[3px] border border-white/10">
                        Academic Building
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase border border-border/60 bg-muted/40 px-2 py-0.5 rounded-[3px] text-foreground/85">
                        <Calendar className="w-3 h-3 text-primary" /> ESTD 2005
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase border border-border/60 bg-muted/40 px-2 py-0.5 rounded-[3px] text-foreground/85">
                        <MapPin className="w-3 h-3 text-primary" /> PATNA, BIHAR
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase border border-primary/30 bg-primary/10 px-2 py-0.5 rounded-[3px] text-primary">
                        <GraduationCap className="w-3 h-3" /> HIGH SCHOOL
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2.5 text-foreground">
                      JAI MALA SIKSHA NIKETAN
                    </h3>

                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-4">
                      My secondary school held defining formative experiences. With dedicated teachers and rigorous science courses, this is where my passion for science and computing was ignited.
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-foreground/75 pt-3 border-t border-border/30">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-primary rounded-[1px]" />
                        <span>Academic Base</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-primary rounded-[1px]" />
                        <span>Science Labs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* ROW 4: CARD ON LEFT | SIGNBOARD ON RIGHT */}
            {/* ---------------------------------------------------------------- */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[340px]">
              {/* Checkpoint Node on Central Road */}
              <div className="absolute left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 top-4 lg:top-1/2 lg:-translate-y-1/2 z-20">
                <div className={`checkpoint-node ${activeNodes[4] ? "active" : ""}`}>
                  <GraduationCap className={`w-5 h-5 transition-colors ${activeNodes[4] ? "text-primary" : "text-muted-foreground"}`} />
                </div>
              </div>

              {/* Branch Connector Line to Left Card (Desktop) */}
              <div
                className={`hidden lg:block tree-branch-line to-left right-1/2 w-[42px] ${activeNodes[4] ? "active" : ""
                  }`}
              />

              {/* LEFT COLUMN: CARD 4 (Assam Down Town University) */}
              <div className="w-full lg:w-[calc(50%-42px)] pl-14 sm:pl-16 lg:pl-0 lg:pr-8 order-2 lg:order-1">
                {/* Mobile Waypoint Title */}
                <div className="block lg:hidden mb-4">
                  <span className="text-[10px] font-mono tracking-[2px] uppercase text-primary font-bold block mb-1">
                    WAYPOINT 04 // CURRENT HIGHER ED
                  </span>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] border border-primary/50 bg-primary/10 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-mono font-black tracking-wider uppercase text-foreground">
                      B.TECH IN COMPUTER SCIENCE
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`tree-card-wrapper from-left ${activeNodes[4] ? "is-revealed" : ""
                    } rounded-[4px] border border-border/60 bg-card/75 dark:bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500 overflow-hidden group`}
                >
                  <div className="relative w-full h-[220px] overflow-hidden border-b border-border/40 group/img">
                    <img
                      src={clGImage}
                      alt="Assam Down Town University"
                      className="w-full h-full object-cover gallery-display-img group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-[3px] border border-white/10">
                        Panikhaiti Campus & Brahmaputra
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase border border-border/60 bg-muted/40 px-2 py-0.5 rounded-[3px] text-foreground/85">
                        <Calendar className="w-3 h-3 text-primary" /> 2023 - 2027
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase border border-border/60 bg-muted/40 px-2 py-0.5 rounded-[3px] text-foreground/85">
                        <MapPin className="w-3 h-3 text-primary" /> GUWAHATI, ASSAM
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase border border-primary/30 bg-primary/15 px-2 py-0.5 rounded-[3px] text-primary font-black">
                        <GraduationCap className="w-3 h-3" /> B.TECH CSE
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2.5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      ASSAM DOWN TOWN UNIVERSITY
                    </h3>

                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-4">
                      Assam Down Town University (ADTU) is a premier university in Northeast India, overlooking the Brahmaputra River. It provides state-of-the-art computer laboratories, full-stack engineering research, and cloud infrastructure.
                    </p>

                    {/* Thumbnail Switcher */}
                    <div className="pt-3 border-t border-border/30 mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-2">
                        Campus Angles:
                      </span>
                      <div className="flex items-center gap-2">
                        {clgimages.map((img, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setClgImage(img)}
                            aria-label={`View ADTU campus photo ${index + 1}`}
                            className={`relative w-14 h-9 rounded-[3px] overflow-hidden border-2 transition-all cursor-pointer ${clGImage === img
                              ? "border-primary ring-2 ring-primary/20 scale-105"
                              : "border-border/60 opacity-60 hover:opacity-100"
                              }`}
                          >
                            <img src={img} alt="Campus angle" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <a
                      href="https://adtu.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground/80 hover:text-primary transition-colors group/link"
                    >
                      <span>Visit Official University Portal</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Milestone Signboard (Desktop) */}
              <div className="w-full lg:w-[calc(50%-42px)] hidden lg:flex justify-start pl-8 order-1 lg:order-2">
                <div
                  className={`milestone-signboard text-left ${activeNodes[4] ? "is-revealed" : ""
                    }`}
                >
                  <span className="text-[10px] font-mono tracking-[2px] uppercase text-primary font-bold block mb-1">
                    WAYPOINT 04 // HIGHER EDUCATION
                  </span>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] border border-primary/50 bg-primary/10 backdrop-blur-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <h4 className="text-base font-mono font-black tracking-wider uppercase text-foreground">
                      CURRENTLY DOING B.TECH IN CSE
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 max-w-[280px] font-mono">
                    Specializing in Software Systems, Cloud Architectures, and Full-Stack Engineering.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBackground;
