import { useState, useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { Toaster } from '@/components/ui/sonner';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MyBackground from './components/Background';
import AdminDashboard from './admin/AdminDashboard';
import AdminLoginModal from './admin/AdminLoginModal';
import { useAdminAuth } from './hooks/usePortfolio';

function App() {
  const { isAdmin, login } = useAdminAuth();
  const [showAdmin, setShowAdmin] = useState(
    () => window.location.pathname === '/admin' || window.location.hash === '#admin'
  );
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Sync /admin URL changes
  useEffect(() => {
    const checkAdminRoute = () => {
      if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
        if (isAdmin) {
          setShowAdmin(true);
        } else {
          setIsLoginModalOpen(true);
        }
      }
    };

    checkAdminRoute();
    window.addEventListener('popstate', checkAdminRoute);
    return () => window.removeEventListener('popstate', checkAdminRoute);
  }, [isAdmin]);

  const handleOpenAdmin = () => {
    if (isAdmin) {
      setShowAdmin(true);
      window.history.pushState(null, '', '/admin');
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleExitAdmin = () => {
    setShowAdmin(false);
    window.history.pushState(null, '', '/');
  };

  const handleLoginSuccess = async (password, email) => {
    await login(password, email);
    setShowAdmin(true);
    window.history.pushState(null, '', '/admin');
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {showAdmin && isAdmin ? (
        <AdminDashboard onExit={handleExitAdmin} />
      ) : (
        <div className="min-h-screen bg-background text-foreground antialiased">
          <Navigation onOpenAdmin={handleOpenAdmin} />
          <main className="relative">
            <Hero />
            <MyBackground />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer onOpenAdmin={handleOpenAdmin} />
          <ScrollToTop />
        </div>
      )}

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => {
          setIsLoginModalOpen(false);
          if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
            window.history.pushState(null, '', '/');
          }
        }}
        onLoginSuccess={handleLoginSuccess}
      />

      <Toaster position="top-right" richColors />
    </ThemeProvider>
  );
}

export default App;
