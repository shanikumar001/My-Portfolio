import { useState } from 'react';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useProjects } from '../hooks/usePortfolio';
import ziurodb from "../assets/project-image/ziurodb.png";
import ziuroworkers from "../assets/project-image/ziuroworkers.png";
import procoders from "../assets/project-image/ziurocoding.png";

const Projects = () => {
  const { data: dbProjects, isLoading } = useProjects();

  // Initial verified fallback projects
  const defaultProjects = [
    {
      id: '1',
      title: 'ZiuroDB',
      description: 'A modern database management platform supporting MongoDB, MySQL, PostgreSQL, Firebase, and Supabase. Features a dynamic Database-to-REST API gateway, Ziuro-AI natural language query assistant, universal ZQL query language, and an official npm package SDK.',
      image: ziurodb,
      liveURL: 'https://www.ziurodb.com',
      repoURL: 'https://github.com/ziurodb',
      tags: ['React', 'TypeScript', 'Electron', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'Socket.io', 'Docker', 'BullMQ', 'Redis', 'Firebase', 'Cloudinary', 'Vercel']
    },
    {
      id: '2',
      title: 'ZiuroCoding',
      description: 'A full-stack coding assessment platform for conducting secure, timed programming tests with Monaco Editor supporting Java, C++, and Python. Implements scalable Redis + Bull queue execution with isolation, anti-cheating, real-time leaderboards, and an admin dashboard.',
      image: procoders,
      liveURL: 'https://coding.ziuro.com',
      repoURL: 'https://github.com/ziurocoding',
      tags: ['React (Vite)', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redis', 'Bull Queue', 'JWT', 'Monaco Editor', 'Java', 'Python', 'C++', 'Docker']
    },
    {
      id: '3',
      title: 'ZiuroWorkers',
      description: 'A service marketplace platform connecting customers with local and online freelancers, managing booking lifecycles, escrow payments, vendor dashboards, and live order tracking.',
      image: ziuroworkers,
      liveURL: 'https://workers.ziuro.com',
      repoURL: 'https://github.com/shanikumar001/ziuroworkers_app',
      tags: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs', 'Cloudinary']
    }
  ];

  // Normalize project properties from MongoDB
  const projects = dbProjects && dbProjects.length > 0
    ? dbProjects.map((p) => {
        let image = p.image;
        if (!image) {
          if (p.title?.toLowerCase().includes('ziurodb')) image = ziurodb;
          else if (p.title?.toLowerCase().includes('coding') || p.title?.toLowerCase().includes('procoders')) image = procoders;
          else if (p.title?.toLowerCase().includes('workers')) image = ziuroworkers;
        }
        return {
          id: p._id || p.id,
          title: p.title,
          description: p.description,
          tags: p.tags || [],
          image,
          liveURL: p.liveUrl || p.liveURL,
          repoURL: p.githubUrl || p.repoURL,
        };
      })
    : defaultProjects;

  const displayProjects = projects;

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-background">
      {/* Decorative background grids */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30 dark:opacity-20 select-none">
        <div className="absolute top-1/3 left-[5%] w-[25rem] h-[25rem] bg-foreground/2 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-[5%] w-[30rem] h-[30rem] bg-foreground/2 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="max-w-8xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-xs sm:text-sm font-black tracking-[3px] uppercase text-foreground/50 mb-3">
              MY CREATIVE VENTURES
            </p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
              Featured <span className="bg-gradient-to-r from-foreground via-foreground/70 to-foreground bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-foreground mx-auto rounded-[2px] mt-3 opacity-80" />
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-foreground/60" />
            </div>
          )}

          {/* Projects Grid */}
          {!isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  imageUrl={project.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, imageUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imageSrc = project.image || imageUrl;

  return (
    <Card className="group overflow-hidden border border-border/40 bg-card/45 dark:bg-card/25 backdrop-blur-md hover:border-foreground/25 hover:shadow-2xl hover:shadow-foreground/5 hover:-translate-y-1.5 transition-all duration-300 rounded-[4px] flex flex-col justify-between h-full">
      <div>
        {/* Project Thumbnail Image */}
        <div className="relative overflow-hidden aspect-video bg-muted border-b border-border/40 select-none">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-foreground/60" />
            </div>
          )}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-2 rounded-[4px] bg-foreground/10 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-foreground/80" />
                </div>
                <p className="text-xs text-foreground/60 font-medium">Image unavailable</p>
              </div>
            </div>
          )}
          {imageSrc && (
            <img
              src={imageSrc}
              alt={project.title}
              className={`
                w-full h-full object-cover transition-transform duration-500
                ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
                group-hover:scale-105
              `}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true);
                setImageLoaded(true);
              }}
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <CardHeader className="p-6 pb-3">
          <CardTitle className="text-xl font-bold text-foreground transition-colors duration-200">
            {project.title}
          </CardTitle>
          <CardDescription className="text-foreground/70 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-3 min-h-[3.75rem]">
            {project.description}
          </CardDescription>
        </CardHeader>
      </div>

      <div>
        {/* Project tags list */}
        {project.tags && project.tags.length > 0 && (
          <div className="px-6 pb-3 flex flex-wrap gap-1.5 select-none">
            {project.tags.slice(0, 5).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-[3px] bg-foreground/5 dark:bg-card/80 border border-border/60 text-[10px] font-mono font-semibold text-foreground/70"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="px-2 py-0.5 rounded-[3px] bg-foreground/5 dark:bg-card/80 border border-border/60 text-[10px] font-mono font-semibold text-foreground/60">
                +{project.tags.length - 5} more
              </span>
            )}
          </div>
        )}

        {/* Footer Actions */}
        <CardFooter className="p-6 pt-3 flex gap-3">
          {project.liveURL && (
            <a
              href={project.liveURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              aria-label={`View ${project.title} live demo`}
            >
              <Button
                variant="default"
                size="sm"
                className="w-full text-xs font-bold tracking-wide rounded-[4px] transition-all duration-300 hover:scale-[1.03]"
              >
                <ExternalLink className="h-4 w-4 mr-1.5" />
                Live Demo
              </Button>
            </a>
          )}
          {project.repoURL && (
            <a
              href={project.repoURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              aria-label={`View ${project.title} source code`}
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs font-bold tracking-wide rounded-[4px] border border-border/70 hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-[1.03]"
              >
                <Github className="h-4 w-4 mr-1.5" />
                Code
              </Button>
            </a>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};

export default Projects;
