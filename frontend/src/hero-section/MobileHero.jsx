import { useState, useEffect } from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import shani from "../assets/shani4.png";
import shaniBack from "../assets/shani4.png";
import instagram2 from "../assets/icon/instagram2.png";
import youtube2 from "../assets/icon/youtube2.png";
import linkdin2 from "../assets/icon/linkdin2.png";
import TypingHeading from '../components/ui/headingAnimation';

const MobileHero = ({ scrollToSection }) => {
  const [flipped, setFlipped] = useState(false);
  const { resolvedTheme } = useTheme();

  // Automatically flip card when theme changes
  useEffect(() => {
    // Flip to back when dark theme, front when light theme
    setFlipped(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const handleDownloadCV = () => {
    // In a real implementation, this would download the CV
    // For now, we'll just show a toast or open a link
    alert('CV download will be available soon!')
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-6 sm:space-y-8">

          {/* Profile Image with Flip Card */}
          <div className="flex flex-col items-center gap-4">
            {/* Flip Button */}
            {/* <Button
              onClick={() => setFlipped(!flipped)}
              variant="outline"
              size="sm"
              className="
                border-2 border-primary/50
                transition-all duration-300
                hover:bg-primary/10 hover:border-primary
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              "
            >
              {flipped ? 'Show Front' : 'Flip Card'}
            </Button> */}

            {/* Flip Card */}
            <div className="flip-wrapper w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]">
              <div className={`flip-card ${flipped ? "flipped" : ""}`}>
                <div className="flip-face front">
                  <img 
                    src={shani} 
                    alt="Balmiki Kumar - Front" 
                    className="drop-shadow-2xl w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="flip-face back">
                  <img 
                    src={shaniBack} 
                    alt="Balmiki Kumar - Back" 
                    className="drop-shadow-2xl w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Text */}
          <p className="text-sm font-semibold tracking-[2px] uppercase text-muted-foreground">
            WELCOME TO MY WORLD ✨
          </p>

          {/* Name and Title */}
          <h1 className="">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl sm:text-4xl font-bold text-transparent">
              Hi,
            </span>
            <span className="ml-2 text-2xl sm:text-3xl font-medium text-foreground">
              I'm <strong className="text-primary">Balmiki Kumar</strong>
            </span>
          </h1>

          <TypingHeading />

          {/* Description */}
          <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto mb-6">
            Building scalable software, developer tools, and modern applications that solve real-world problems. Full-stack development, database engineering, system design, and cloud workflows.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mb-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="
                bg-gradient-to-r from-primary to-accent text-primary-foreground
                font-semibold
                mx-20
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
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="
                border-2 border-primary/50
                mx-20
                font-semibold
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

          {/* Social Icons */}
          <div className="flex gap-4 justify-center mb-6">
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
                  rounded-[4px]
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

          {/* Scroll Down Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="pt-4 animate-bounce text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-[4px] p-2"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="mx-auto h-6 w-6" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default MobileHero;