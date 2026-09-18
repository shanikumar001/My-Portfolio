import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {useIsMobile} from "./frame/MobileFrame";
import MobileHero from "../hero-section/MobileHero";
import DesktopHero from "../hero-section/DesktopHero";

// import your assets


const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return isMobile ? (
    <MobileHero scrollToSection={scrollToSection} />
  ) : (
    <DesktopHero scrollToSection={scrollToSection} />
  );
};

export default Hero;
