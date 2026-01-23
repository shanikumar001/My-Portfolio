import { useEffect, useState } from 'react';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGetUserProjects } from '../hooks/useQueries';
import uniwork from "../assets/project-image/uniwork.png";
import emoji from "../assets/project-image/emoji.png";
import portfolio from "../assets/project-image/portfolio.png";

const Projects = () => {
  const { data: projects, isLoading } = useGetUserProjects();
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    if (projects) {
      projects.forEach((project) => {
        if (project.image && typeof project.image === 'object' && 'getDirectURL' in project.image) {
          const url = project.image.getDirectURL();
          setImageUrls((prev) => ({ ...prev, [project.id]: url }));
        }
      });
    }
  }, [projects]);

  // Default projects to show when no backend data
  const defaultProjects = [
    {
      id: '1',
      title: 'Uni-Work',
      description: 'Uni-Work is a web platform that helps users find skilled workers for any job — plumbers, electricians, designers, developers, home-service experts, repair professionals, and more. It also allows individuals — freelancers, technicians, and service providers — to register as workers and offer their services to clients.',
      image: uniwork,
      liveURL: 'https://uni-work-6h5r.onrender.com',
      repoURL: 'https://github.com/shanikumar001/uni-work'
    },
    {
      id: '2',
      title: 'smart-emoji',
      description: 'This project features an intelligent emoji UI that dynamically changes expressions based on the user’s selected emotion or interaction. Includes smooth animations, multiple facial expression states, and a clean responsive layout. Ideal for learning state-based UI design and creative front-end animation.',
      image: emoji,
      liveURL: 'https://emotion-based-emoji-expression.vercel.app/',
      repoURL: 'https://github.com/shanikumar001/Emotion-Based-Emoji-Expression-System'
    },
    {
      id: '3',
      title: 'My Portfolio',
      description: 'Modern portfolio template with CMS integration, blog functionality, and project showcase capabilities.',
      image: portfolio,
      liveURL: '',
      repoURL: 'https://github.com'
    }
  ];

  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects;

  const [viewProjects, setViewProjects] = useState();
  const handleViewProjects = () => {
      setViewProjects(!viewProjects);
      alert('work on progress...')
  }

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing various technologies and design approaches.
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          )}

          {/* Projects Grid */}
          {!isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  imageUrl={imageUrls[project.id]}
                />
              ))}
            </div>
          )}
        </div>
        <div className='h-20 w-full flex items-center '>
          <button className='text-xl font-black leading-tight
            bg-gradient-to-r from-primary via-accent to-primary
            bg-clip-text text-transparent
            bg-[length:200%_auto] ml-20 mt-10
            animate-gradient' onClick={() => {handleViewProjects()}}>View more ➜</button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, imageUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Use either backend URL or local import
  const imageSrc =
    imageUrl || (typeof project.image === 'string' ? project.image : project.image);

  return (
    <Card className="group overflow-hidden hover:shadow-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-card-scale">
      <div className="relative overflow-hidden aspect-video bg-muted">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Image unavailable</p>
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
              group-hover:scale-110
            `}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 min-h-[2.5rem]">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2">
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
              className="w-full transition-all duration-200 hover:scale-105"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
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
              className="w-full transition-all duration-200 hover:scale-105"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};


export default Projects;

