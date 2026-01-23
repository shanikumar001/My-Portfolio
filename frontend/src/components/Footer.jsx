import { Heart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Footer = () => {
  const handleDownloadSource = () => {
    toast.info('Preparing source code download...');
    
    // In a real implementation, this would trigger a download of the source code
    // Since we cannot access the actual source files from the browser,
    // we'll provide a link to the repository or documentation
    toast.success('Source code is available on request. Contact the developer for access.');
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left text-sm text-muted-foreground">
            <p className="flex items-center justify-center sm:justify-start gap-2">
              © 2025. Developer{' '}
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                shani kumar
              </a>
            </p>
          </div>
          <a
            variant="outline"
            size="sm"
            href='https://github.com/shanikumar001?tab=repositories'
            className="gap-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Download className="h-4 w-4" /> Download Source Code
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

