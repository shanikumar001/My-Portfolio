import { Heart, Github, Linkedin, Terminal, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-md relative overflow-hidden select-none">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Brand/Logo Section */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-lg font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent hover:opacity-85 transition-opacity flex items-center gap-2"
            >
              <Terminal className="w-5 h-5 text-primary" />
              <span>Balmiki Kumar</span>
            </button>
            <p className="text-xs text-foreground/60 leading-relaxed max-w-sm">
              Founder & Full-Stack Engineer designing scalable developer infrastructure, query administrators, and user-centric software systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-foreground/50 uppercase">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-left text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-foreground/50 uppercase">Connect</h4>
            <div className="flex flex-col gap-2 text-xs">
              <a 
                href="https://github.com/shanikumar001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors duration-200 w-fit"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/balmiki-kumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors duration-200 w-fit"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://balmikikumar.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors duration-200 w-fit"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Website</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="border-t border-border/30 my-6" />

        {/* Bottom copyright section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs text-foreground/50">
          <div>
            <span>© 2026 Balmiki Kumar. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>using React & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
