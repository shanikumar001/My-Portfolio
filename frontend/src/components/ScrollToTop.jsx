import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="
        fixed bottom-8 right-8 z-50
        rounded-full
        bg-gradient-to-r from-primary to-accent
        text-primary-foreground
        shadow-lg shadow-primary/30
        hover:shadow-xl hover:shadow-primary/40
        transition-all duration-300
        hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        animate-in fade-in slide-in-from-bottom-4
      "
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop;

