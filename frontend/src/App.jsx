import { useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { Toaster } from '@/components/ui/sonner';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import { useCheckUser } from './hooks/useQueries';
import { useIsMobile } from './components/frame/MobileFrame';
import MyBackground from './components/Background';

function App() {
  const { identity, isInitializing } = useInternetIdentity();
  const { mutate: checkUser } = useCheckUser();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (identity && !isInitializing) {
      // Initialize user in backend
      checkUser('Portfolio User');
    }
  }, [identity, isInitializing, checkUser]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Navigation />
        <main className="relative">
          <Hero />
          {!isMobile? <MyBackground /> : ''}
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
      <Toaster position="top-right" richColors />
    </ThemeProvider>
  );
}

export default App;

