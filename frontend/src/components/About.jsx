import { Code2, Palette, Rocket, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    'React', 'JavaScript', 'Node.js', 'Python',
    'Tailwind CSS', 'Next.js', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'Git', 'Figma'
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful interfaces with attention to every detail.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Building fast, optimized applications for the best user experience.'
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Putting users first in every decision and design choice.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-card-scale">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate Full-Stack & Blockchain Developer and UI/UX Designer, creating intuitive and visually appealing digital experiences with modern technologies.
            </p>
          </div>

          {/* Background */}
          <div className="mb-16 animate-card-scale">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto]
             ">Background</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 5 years of experience in web development, I've had the privilege of working on diverse projects
                  ranging from startup MVPs to enterprise-level applications. My journey began with a fascination for how
                  things work on the web, which quickly evolved into a career dedicated to building innovative solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and staying up-to-date with the latest technologies. When I'm not coding,
                  you'll find me exploring new design trends, contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group animate-card-scale">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary/50 to-accent/50">
                      <IconComponent className="h-8 w-8 text-3xl text-center" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-primary via-accent to-primary
            bg-clip-text text-transparent
            bg-[length:200%_auto]
            animate-gradient ">Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card border-2 border-border rounded-full text-sm font-medium hover:border-primary/50 hover:bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 hover:animate-gradient hover:scale-105 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

