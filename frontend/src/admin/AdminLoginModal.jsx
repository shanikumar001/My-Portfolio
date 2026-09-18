import React, { useState, useEffect } from 'react';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, X, Sparkles, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { authAPI } from '@/lib/api';

const AdminLoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('shani@gmai.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Automatically fetch configured admin email from backend .env
  useEffect(() => {
    if (isOpen) {
      setErrorMessage('');
      authAPI.getConfig().then((configuredEmail) => {
        if (configuredEmail) {
          setEmail(configuredEmail);
        }
      }).catch(() => {
        // Fallback default
        setEmail('shani@gmai.com');
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      toast.error('Please enter the admin email');
      setErrorMessage('Admin email is required');
      return;
    }
    if (!password.trim()) {
      toast.error('Please enter the admin password');
      setErrorMessage('Admin password is required');
      return;
    }

    setIsSubmitting(true);
    try {
      await onLoginSuccess(password, email);
      onClose();
    } catch (err) {
      const msg = err.message || 'Invalid admin credentials';
      setErrorMessage(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickFill = () => {
    setEmail('shani@gmai.com');
    setPassword('32145678');
    setErrorMessage('');
    toast.info('Filled credentials from backend .env');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-card border border-border/80 shadow-2xl shadow-primary/10 select-none">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3 shadow-inner">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black tracking-tight text-foreground">Admin Portal Access</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Authenticated via credentials configured in <code className="text-primary font-mono font-bold">backend/.env</code>
          </p>
        </div>

        {/* Inline Error Notice */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-xs flex items-start gap-2">
            <span className="font-bold">Error:</span>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Admin Email Input */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                Admin Email
              </label>
              <span className="text-[10px] text-primary/80 font-mono">From .env</span>
            </div>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage('');
                }}
                placeholder="shani@gmai.com"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all pl-10"
              />
              <Mail className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Admin Password Input */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                Admin Password
              </label>
              <button
                type="button"
                onClick={handleQuickFill}
                className="text-[10px] font-mono text-primary hover:underline flex items-center gap-1 transition-colors"
                title="Fill credentials from .env"
              >
                <Sparkles className="w-3 h-3" />
                <span>Fill .env credentials</span>
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage('');
                }}
                placeholder="Enter admin password"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all pl-10 pr-11"
                autoFocus
              />
              <KeyRound className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 rounded-xl font-bold tracking-wide bg-gradient-to-r from-primary via-accent to-primary hover:opacity-95 text-primary-foreground shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sign In as Admin</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-muted-foreground font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>MongoDB Atlas Active</span>
          </div>
          <span className="text-sky-500 font-semibold">Cloudinary Connected</span>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginModal;

