import { createContext, useContext, useState, useEffect } from 'react';

const InternetIdentityContext = createContext(undefined);

export function InternetIdentityProvider({ children }) {
  const [identity, setIdentity] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Check for stored identity
    const stored = localStorage.getItem('internet-identity');
    if (stored) {
      setIdentity(stored);
    }
    setIsInitializing(false);
  }, []);

  const login = async () => {
    // Mock login - replace with actual Internet Identity login
    const mockIdentity = 'mock-principal-' + Date.now();
    setIdentity(mockIdentity);
    localStorage.setItem('internet-identity', mockIdentity);
  };

  const logout = () => {
    setIdentity(null);
    localStorage.removeItem('internet-identity');
  };

  return (
    <InternetIdentityContext.Provider value={{ identity, isInitializing, login, logout }}>
      {children}
    </InternetIdentityContext.Provider>
  );
}

export function useInternetIdentity() {
  const context = useContext(InternetIdentityContext);
  if (context === undefined) {
    throw new Error('useInternetIdentity must be used within an InternetIdentityProvider');
  }
  return context;
}

