import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { contactAPI } from '../lib/contact.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await contactAPI.submit(formData);
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
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

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@balmikikumar.com',
      label: 'contact@balmikikumar.com'
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/balmiki-kumar',
      label: 'linkedin.com/in/balmiki-kumar'
    },
    {
      name: 'GitHub',
      icon: SiGithub,
      href: 'https://github.com/shanikumar001',
      label: 'github.com/shanikumar001'
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {/* Contact Form */}
            <Card className="border-2 animate-card-scale">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hi!"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-card-scale">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                  <CardDescription>
                    Find me on these platforms or send me an email directly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${link.name} profile`}
                        className="flex items-center gap-4 p-4 rounded-[4px] border-2 border-border hover:border-primary/50 hover:bg-accent/5 transition-all duration-200 hover:scale-[1.02] group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-[4px] bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold group-hover:text-primary transition-colors">
                            {link.name}
                          </p>
                          <p className="text-sm text-muted-foreground truncate">
                            {link.label}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Open to Opportunities</h3>
                  <p className="text-sm text-muted-foreground">
                    I'm currently available for freelance projects and full-time positions.
                    Let's build something amazing together!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

