import frontImage from "../assets/shani4.png";
import backImage from "../assets/shani4.png";
import instagram2 from "../assets/icon/instagram2.png";
import youtube2 from "../assets/icon/youtube2.png";
import linkdin2 from "../assets/icon/linkdin2.png";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
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
    // In a real implementation, this would download the CV
    // For now, we'll just show a toast or open a link
    alert('CV download will be available soon!')
    window.open('/cv.pdf', '_blank') || alert('CV download will be available soon!');
  };

  const socialLinks = [
    { icon: youtube2, href: 'https://www.youtube.com/@Coding_with_Shani', label: 'YouTube' },
    { icon: instagram2, href: 'https://www.instagram.com/sr.coding01/', label: 'Instagram' },
    { icon: linkdin2, href: 'https://www.linkedin.com/in/shani-kumar-801503348/', label: 'LinkedIn' },
  ];

  return (
    <section
      id="hero"
      className="
        min-h-screen flex flex-col lg:flex-row justify-between items-center
        px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 lg:py-24
        relative overflow-hidden
        bg-gradient-to-br from-background via-background to-muted/20
        gap-8 lg:gap-0
      "
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* TEXT SECTION */}
      <section className="w-full lg:max-w-[45%] z-10 pl-10 animate-fade-left text-center lg:text-left">
        <p className="text-sm font-semibold tracking-[2px] uppercase text-muted-foreground mb-4">
          WELCOME TO MY WORLD ✨
        </p>

        <h1 className="mb-3">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-transparent">
            Hi,
          </span>
          <span className="ml-2 text-xl sm:text-2xl lg:text-[1.6rem] font-medium text-foreground">
            I'm <strong className="text-primary">Shani Kumar</strong>
          </span>
        </h1>

        {/* <h2
          className="
            text-3xl sm:text-4xl lg:text-[2.6rem] font-black leading-tight mb-6
            bg-gradient-to-r from-primary via-accent to-primary
            bg-clip-text text-transparent
            bg-[length:200%_auto]
            animate-gradient 
          "
        >
          FULLSTACK DEVELOPER 
          BLOCKCHANI DEVELOPER
          UI & UX DESIGNER
        </h2> */}
        <TypingHeading />

        <p className="text-base text-muted-foreground leading-relaxed max-w-[580px] mb-10 ">
          Passionate Full-stack | Blockchain Developer & UI/UX Designer, creating intuitive and visually appealing
          digital experiences with modern technologies.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="
              bg-gradient-to-r from-primary to-accent text-primary-foreground
              font-semibold
              px-8 py-6
              rounded-xl
              shadow-lg shadow-primary/30
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            "
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            My Projects
          </Button>

          <Button
            onClick={handleDownloadCV}
            size="lg"
            variant="outline"
            className="
              border-2 border-primary/50
              font-semibold
              px-8 py-6
              rounded-xl
              transition-all duration-300
              hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground hover:border-transparent
              hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            "
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 justify-center lg:justify-start">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="
                w-12 h-12
                flex items-center justify-center
                bg-card border-2 border-border
                rounded-full
                transition-all duration-300
                hover:border-primary hover:bg-primary/10
                hover:rotate-12 hover:scale-110
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                cursor-pointer
                group
              "
            >
              <img src={social.icon} alt={social.label} className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="w-full lg:max-w-[45%] max-w-[500px] h-[400px] sm:h-[500px] lg:h-[600px] flex flex-col justify-center items-center  animate-fade-right relative z-10 ">
        {/* Flip Button */}
        {/* <Button
          onClick={() => setFlipped(!flipped)}
          variant="outline"
          size="sm"
          className="
            mb-2 lg:mb-4
            border-2 border-primary/50
            transition-all duration-300
            hover:bg-primary/10 hover:border-primary
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          "
        >
          {flipped ? 'Show Front' : 'Flip Card'}
        </Button> */}

       <div className="bg-red-500 p-1 bg-gradient-to-r from-primary via-accent to-primary animate-gradient rounded-[50%] hover:scale-105 transition-all duration-200 ease-in-out">
         <div className="flip-wrapper w-[300px] h-[350px] sm:w-[350px] sm:h-[400px] lg:w-[400px] lg:h-[450px]">
          <div className={`flip-card  cursor-pointer ${flipped ? "flipped" : ""}`}>
            <div className="flip-face front">
              <img 
                src={frontImage} 
                alt="Shani Kumar - Front" 
                className="drop-shadow-2xl w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="flip-face back ">
              <img 
                src={backImage} 
                alt="Shani Kumar - Back" 
                className="drop-shadow-2xl w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
       </div>
      </section>
    </section>
  );
};

export default DesktopHero;
