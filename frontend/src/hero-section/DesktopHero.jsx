import frontImage from "../assets/shani4.png";
import backImage from "../assets/shani4.png";
import instagram2 from "../assets/icon/instagram2.png";
import youtube2 from "../assets/icon/youtube2.png";
import linkdin2 from "../assets/icon/linkdin2.png";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Code2, Link2, Database, Palette, Shield, Terminal, ArrowRight } from "lucide-react";
import { useTheme } from '@/hooks/useTheme';
import TypingHeading from "../components/ui/headingAnimation";

const DesktopHero = () => {
  const [flipped, setFlipped] = useState(false);
  const { resolvedTheme } = useTheme();

  // Automatically flip card when theme changes
  useEffect(() => {
    // Flip to back when dark theme, front when light theme
    setFlipped(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadCV = () => {
    alert('CV download will be available soon!');
    window.open('/cv.pdf', '_blank') || alert('CV download will be available soon!');
  };

  const socialLinks = [
    { icon: youtube2, href: 'https://www.youtube.com/@Coding_with_Shani', label: 'YouTube' },
    { icon: instagram2, href: 'https://www.instagram.com/sr.coding01/', label: 'Instagram' },
    { icon: linkdin2, href: 'https://www.linkedin.com/in/balmiki-kumar', label: 'LinkedIn' },
  ];

  return (
    <section
      id="hero"
      className="
        min-h-screen flex flex-col lg:flex-row justify-between items-center
        px-6 sm:px-12 lg:px-24 py-20 lg:py-28
        relative overflow-hidden
        bg-gradient-to-br from-background via-background to-muted/10
        gap-12 lg:gap-8
      "
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-[10%] left-[5%] w-[30rem] h-[30rem] bg-primary/8 rounded-full blur-3xl animate-pulse duration-7000" />
        <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-accent/8 rounded-full blur-3xl animate-pulse duration-10000" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] right-[30%] w-[20rem] h-[20rem] bg-primary/5 rounded-full blur-3xl animate-pulse duration-5000" style={{ animationDelay: '4s' }} />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* TEXT SECTION */}
      <section className="w-full lg:max-w-[50%] z-10 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
        {/* Welcome Tag */}
        <p className="opacity-0 animate-fade-up stagger-1 text-xs sm:text-sm font-black tracking-[3px] uppercase text-primary mb-4 bg-primary/10 px-4 py-2 rounded-[4px] border border-primary/20 inline-block w-fit">
          WELCOME TO MY WORLD
        </p>

        {/* Title */}
        <h1 className="mb-4 opacity-0 animate-fade-up stagger-2 flex flex-col gap-1 sm:gap-2">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-muted-foreground">
            Hi, I'm
          </span>
          <span className="text-5xl sm:text-6xl lg:text-[4.8rem] font-black tracking-tight leading-none bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Balmiki Kumar
          </span>
        </h1>

        {/* Subtitle / Typing animation */}
        <div className="opacity-0 animate-fade-up stagger-3 mb-6 min-h-[3.5rem] flex items-center">
          <TypingHeading />
        </div>

        {/* Description */}
        <p className="opacity-0 animate-fade-up stagger-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[560px] mb-10 text-center lg:text-left">
          Building scalable software, developer tools, and modern applications that solve real-world problems. Full-stack development, database engineering, system design, and cloud workflows.
        </p>

        {/* BUTTONS */}
        <div className="opacity-0 animate-fade-up [animation-delay:0.5s] [animation-fill-mode:forwards] flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="
              relative overflow-hidden group
              bg-gradient-to-r from-primary to-accent text-primary-foreground
              font-bold tracking-wide
              px-8 py-6
              rounded-[4px]
              shadow-lg shadow-primary/25
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/35
              active:translate-y-0
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            "
          >
            {/* Shine Sweep Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            My Projects
          </Button>

          <Button
            onClick={handleDownloadCV}
            size="lg"
            variant="outline"
            className="
              border-2 border-primary/30 dark:border-primary/40 bg-transparent
              font-bold tracking-wide
              px-8 py-6
              rounded-[4px]
              transition-all duration-300
              hover:bg-primary hover:text-primary-foreground hover:border-primary
              hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/15
              active:translate-y-0
              group
            "
          >
            <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-300" />
            Download CV
          </Button>
        </div>

        {/* SOCIAL ICONS */}
        <div className="opacity-0 animate-fade-up [animation-delay:0.6s] [animation-fill-mode:forwards] flex gap-4 justify-center lg:justify-start">
          {socialLinks.map((social, i) => {
            let hoverGlow = "hover:shadow-foreground/10 dark:hover:shadow-foreground/20 hover:border-foreground hover:bg-foreground/5 hover:text-foreground";

            return (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`
                  w-12 h-12
                  flex items-center justify-center
                  bg-background/80 dark:bg-card/85 backdrop-blur-sm
                  border border-border/80
                  rounded-[4px]
                  shadow-md
                  transition-all duration-300
                  hover:rotate-6 hover:scale-110 hover:shadow-lg
                  ${hoverGlow}
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                  cursor-pointer
                  group
                `}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-5 h-5 group-hover:scale-115 transition-transform duration-300 ease-out"
                />
              </a>
            );
          })}
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="w-full lg:max-w-[45%] max-w-[480px] h-[450px] sm:h-[500px] lg:h-[550px] flex flex-col justify-center items-center animate-fade-right relative z-10">

        {/* Floating Tech Badges */}
        <div className="absolute top-[10%] -left-8 z-20 bg-background/80 dark:bg-card/85 backdrop-blur-md border border-border/50 px-4 py-2.5 rounded-[4px] shadow-lg flex items-center gap-2 animate-float-1 hover:scale-105 transition-transform duration-300 select-none">
          <div className="w-2 h-2 rounded-[2px] bg-foreground animate-ping" />
          <Code2 className="w-4 h-4 text-foreground" />
          <span className="text-xs font-semibold tracking-wide">MERN Stack Developer</span>
        </div>

        <div className="absolute bottom-[8%] -right-6 z-20 bg-background/80 dark:bg-card/85 backdrop-blur-md border border-border/50 px-4 py-2.5 rounded-[4px] shadow-lg flex items-center gap-2 animate-float-2 hover:scale-105 transition-transform duration-300 select-none">
          <div className="w-2 h-2 rounded-[2px] bg-foreground animate-ping" />
          <Link2 className="w-4 h-4 text-foreground" />
          <span className="text-xs font-semibold tracking-wide">Web3 & Solidity</span>
        </div>

        <div className="absolute top-1/2 -right-10 z-20 bg-background/80 dark:bg-card/85 backdrop-blur-md border border-border/50 px-4 py-2.5 rounded-[4px] shadow-lg flex items-center gap-2 animate-float-3 hover:scale-105 transition-transform duration-300 select-none">
          <div className="w-2 h-2 rounded-[2px] bg-foreground animate-ping" />
          <Palette className="w-4 h-4 text-foreground" />
          <span className="text-xs font-semibold tracking-wide">UI/UX Designer</span>
        </div>

        {/* Gradient Border Card Wrapper */}
        <div className="p-[3px] bg-gradient-to-r from-primary via-accent to-primary animate-gradient rounded-[4px] hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 ease-out select-none">
          <div className="flip-wrapper w-[290px] h-[380px] sm:w-[340px] sm:h-[430px] lg:w-[380px] lg:h-[470px]">
            <div
              className={`flip-card cursor-pointer ${flipped ? "flipped" : ""}`}
              onClick={() => setFlipped(!flipped)}
            >
              {/* FRONT FACE */}
              <div className="flip-face front p-6 flex flex-col justify-between items-center text-center relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-[4px] blur-2xl -z-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-[4px] blur-2xl -z-10" />

                {/* Glowing Photo Frame */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-50 lg:h-150 rounded-[4px] p-[2px] bg-gradient-to-tr from-primary to-accent mt-4 shadow-xl">
                  {/* <div className="absolute inset-0 rounded-[4px] bg-gradient-to-tr from-primary to-accent animate-spin-slow opacity-75 -z-10 blur-sm" /> */}
                  <div className="h-full rounded-[4px] bg-card overflow-hidden p-1 flex items-center justify-center">
                    <img
                      src={frontImage}
                      alt="Balmiki Kumar - Front"
                      className="h-full object-cover rounded-[4px]"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Mini Identity Details */}
                <div className="mt-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Balmiki Kumar</h3>
                  <p className="text-xs text-foreground/75 mt-1 tracking-wider uppercase font-bold">Founder & Full-Stack Engineer</p>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-[4px] bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-500 mt-3.5 uppercase tracking-wider animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-[2px] bg-emerald-500" />
                    Available For Work
                  </div>
                </div>

                {/* Prompt to flip */}
                <span className="text-[10px] text-foreground/60 mb-2 hover:text-primary transition-colors flex items-center gap-1">
                  Click to Flip Profile <ArrowRight className="w-3 h-3 animate-bounce" />
                </span>
              </div>

              {/* BACK FACE */}
              <div className="flip-face back p-6 sm:p-8 flex flex-col justify-between items-stretch text-left relative overflow-hidden">
                {/* HUD Decorative background */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-accent/20 rounded-tr-[4px]" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-primary/20 rounded-bl-[4px]" />

                {/* HUD Title */}
                <div className="flex items-center justify-between border-b border-border/40 pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-primary animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">dev_profile.sh</span>
                  </div>
                  <span className="text-[10px] font-mono text-foreground/60">VER: 2.1.0</span>
                </div>

                {/* Dev Stats / Core Info */}
                <div className="flex flex-col gap-4 my-4">
                  <div>
                    <p className="text-[10px] font-mono text-foreground/50 dark:text-foreground/60 uppercase tracking-widest font-semibold">EDUCATION</p>
                    <h4 className="text-sm font-bold text-foreground mt-1">Assam Down Town University</h4>
                    <p className="text-xs text-foreground/70">B.Tech in Computer Science</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-mono text-foreground/50 dark:text-foreground/60 uppercase tracking-widest font-semibold">CORE SPECIALTIES</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="p-2 rounded-[4px] bg-card/60 border border-border/40 flex items-center gap-2 text-xs">
                        <Code2 className="w-3.5 h-3.5 text-primary" />
                        <span className="text-foreground/85 font-semibold">Full Stack</span>
                      </div>
                      <div className="p-2 rounded-[4px] bg-card/60 border border-border/40 flex items-center gap-2 text-xs">
                        <Database className="w-3.5 h-3.5 text-accent" />
                        <span className="text-foreground/85 font-semibold">Systems</span>
                      </div>
                      <div className="p-2 rounded-[4px] bg-card/60 border border-border/40 flex items-center gap-2 text-xs">
                        <Palette className="w-3.5 h-3.5 text-pink-500" />
                        <span className="text-foreground/85 font-semibold">UI & UX</span>
                      </div>
                      <div className="p-2 rounded-[4px] bg-card/60 border border-border/40 flex items-center gap-2 text-xs">
                        <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-foreground/85 font-semibold">DevOps</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-mono text-foreground/50 dark:text-foreground/60 uppercase tracking-widest font-semibold">CURRENT FOCUS</p>
                    <p className="text-xs text-foreground/75 mt-1 leading-relaxed">
                      Building ZiuroDB, learning Advanced System Design, improving DSA, and exploring cloud infrastructure.
                    </p>
                  </div>
                </div>

                {/* Bottom details */}
                <div className="border-t border-border/40 pt-3 flex items-center justify-between">
                  <span className="text-[10px] text-foreground/60">Located in Bihar, India</span>
                  <span className="text-[10px] text-primary/90 hover:text-primary font-mono font-bold flex items-center gap-1">
                    Flip back <ArrowRight className="w-3 h-3 rotate-180" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DesktopHero;
