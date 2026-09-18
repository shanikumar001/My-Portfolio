import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  Loader2, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { contactAPI } from '../lib/contact.js';
import { useProfile } from '../hooks/usePortfolio';

const Contact = () => {
  const { data: profile } = useProfile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Stack Project',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = profile?.email || 'balmikikumar00321@gmail.com';
  const phone = profile?.phone || '+91 6201970584';
  const location = profile?.location || 'Guwahati, Assam';
  const linkedin = profile?.socialLinks?.linkedin || 'https://www.linkedin.com/in/balmiki-kumar';
  const github = profile?.socialLinks?.github || 'https://github.com/shanikumar001';

  const topics = [
    'Full-Stack Project',
    'Database Tooling',
    'Hiring / Full-Time',
    'General Inquiry'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await contactAPI.submit({
        name: formData.name,
        email: formData.email,
        message: `[Topic: ${formData.subject}]\n\n${formData.message}`
      });
      
      toast.success('Message delivered successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: 'Full-Stack Project', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactChannels = [
    {
      name: 'Email Address',
      icon: Mail,
      href: `mailto:${email}`,
      value: email,
      action: 'copy',
    },
    {
      name: 'Phone Number',
      icon: Phone,
      href: `tel:${phone.replace(/\s+/g, '')}`,
      value: phone,
      action: 'call',
    },
    {
      name: 'Location',
      icon: MapPin,
      href: 'https://maps.google.com/?q=Guwahati,Assam',
      value: `${location} (Patna, Bihar)`,
      action: 'map',
    },
    {
      name: 'LinkedIn Profile',
      icon: SiLinkedin,
      href: linkedin,
      value: 'linkedin.com/in/balmiki-kumar',
      action: 'link',
    },
    {
      name: 'GitHub Profile',
      icon: SiGithub,
      href: github,
      value: 'github.com/shanikumar001',
      action: 'link',
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-background text-foreground">
      {/* Subtle monochromatic background grids */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <div className="absolute top-1/4 right-[5%] w-[30rem] h-[30rem] bg-foreground/5 rounded-[4px] blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-[5%] w-[30rem] h-[30rem] bg-foreground/5 rounded-[4px] blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] border border-border/80 bg-foreground/5 backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-foreground animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-foreground/80">
                LET'S COLLABORATE • AVAILABLE FOR NEW VENTURES
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
              Get In <span className="underline decoration-foreground/40 underline-offset-8">Touch</span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
              Have a software project, database engineering query, or recruitment opportunity? Send a direct message or connect through my channels.
            </p>

            <div className="w-20 h-1 bg-foreground/40 rounded-[2px]" />
          </div>

          {/* Balanced 12-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Channels & Opportunities (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Contact Information Card */}
              <div className="p-6 sm:p-8 rounded-[4px] bg-card/70 dark:bg-card/35 border border-border/70 backdrop-blur-md shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    Connect With Me
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Reach out directly via email, phone, or professional platforms.
                  </p>
                </div>

                <div className="space-y-3">
                  {contactChannels.map((channel, idx) => {
                    const Icon = channel.icon;
                    return (
                      <div
                        key={idx}
                        className="
                          p-3.5 rounded-[4px] bg-foreground/[0.03]
                          border border-border/70 hover:border-foreground/60
                          flex items-center justify-between gap-3
                          transition-all duration-200 group
                        "
                      >
                        <a
                          href={channel.href}
                          target={channel.action === 'link' || channel.action === 'map' ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="flex items-center gap-3.5 flex-1 min-w-0"
                        >
                          <div className="w-9 h-9 rounded-[3px] bg-foreground/5 border border-border/70 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors flex-shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                              {channel.name}
                            </div>
                            <div className="text-xs font-semibold text-foreground truncate group-hover:underline">
                              {channel.value}
                            </div>
                          </div>
                        </a>

                        {channel.action === 'copy' && (
                          <button
                            onClick={handleCopyEmail}
                            title="Copy email address"
                            className="p-2 rounded-[3px] text-muted-foreground hover:text-foreground hover:bg-foreground/5 border border-transparent hover:border-border/60 transition-colors flex-shrink-0"
                          >
                            {copiedEmail ? <Check className="w-3.5 h-3.5 text-foreground" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        )}

                        {(channel.action === 'link' || channel.action === 'map') && (
                          <a
                            href={channel.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-[3px] text-muted-foreground hover:text-foreground hover:bg-foreground/5 border border-transparent hover:border-border/60 transition-colors flex-shrink-0"
                            title={`Open ${channel.name}`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Opportunities & Response Badge Card */}
              <div className="p-6 rounded-[4px] bg-card/70 dark:bg-card/35 border border-border/70 backdrop-blur-md shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-foreground/5 border border-border/70 text-foreground text-xs font-mono font-bold">
                    <span className="w-2 h-2 rounded-[1px] bg-foreground animate-pulse" />
                    <span>Open to Opportunities</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 text-foreground/70" />
                    <span>&lt; 24h Response</span>
                  </div>
                </div>

                <p className="text-xs text-foreground/75 leading-relaxed">
                  I am actively seeking high-impact software engineering roles, distributed systems projects, and freelance platform development. Let's create something extraordinary.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: Send a Message Form (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-[4px] bg-card/70 dark:bg-card/35 border border-border/70 backdrop-blur-md shadow-sm space-y-6">
              
              <div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Send a Message
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Fill out the form below and your message will be forwarded directly to my inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-mono font-semibold text-foreground/80 uppercase tracking-wider">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="rounded-[4px] border-border/70 bg-foreground/[0.02] focus:border-foreground text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-mono font-semibold text-foreground/80 uppercase tracking-wider">
                      Your Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="rounded-[4px] border-border/70 bg-foreground/[0.02] focus:border-foreground text-sm"
                    />
                  </div>
                </div>

                {/* Inquiry Topic Selection */}
                <div className="space-y-2">
                  <Label className="text-xs font-mono font-semibold text-foreground/80 uppercase tracking-wider">
                    Inquiry Topic
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setFormData(prev => ({ ...prev, subject: topic }))}
                        className={`
                          px-3 py-1.5 rounded-[3px] text-xs font-mono font-semibold transition-all
                          border ${
                            formData.subject === topic
                              ? 'bg-foreground text-background border-foreground shadow-xs'
                              : 'bg-foreground/[0.03] text-foreground/75 border-border/70 hover:border-foreground/50 hover:text-foreground'
                          }
                        `}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-mono font-semibold text-foreground/80 uppercase tracking-wider">
                    Message Details *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project scope, technical timeline, or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="rounded-[4px] border-border/70 bg-foreground/[0.02] focus:border-foreground text-sm resize-y leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full py-6 rounded-[4px] font-mono font-bold tracking-wider uppercase text-xs
                    bg-foreground text-background hover:bg-foreground/90 
                    transition-all duration-200 shadow-sm
                    flex items-center justify-center gap-2
                  "
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </Button>

                {/* Security Footer Note */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-muted-foreground border-t border-border/40">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-foreground/70" />
                    <span>Encrypted & Stored in MongoDB</span>
                  </div>
                  <span>Direct Notification to Balmiki</span>
                </div>

              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
