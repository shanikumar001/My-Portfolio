import { Code2, Palette, Rocket, Heart, GraduationCap, Laptop, Database, Link2, Box, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      icon: Terminal,
      skills: ["Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"]
    },
    {
      title: "Frontend & Mobile",
      icon: Laptop,
      skills: ["React", "Next.js", "Flutter", "Tailwind CSS", "Electron"]
    },
    {
      title: "Backend & Cloud",
      icon: Database,
      skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "Docker", "Redis", "BullMQ"]
    },
    {
      title: "Databases & Tools",
      icon: Box,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Git", "Figma"]
    }
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and secure code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Crafting beautiful, pixel-perfect interfaces with meticulous attention to detail.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing speeds, reducing latency, and building blazing-fast user interfaces.'
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Putting user accessibility, journey paths, and user satisfaction at the core of decisions.'
    }
  ];

  const stats = [
    { value: '2+', label: 'Years Coding' },
    { value: '10+', label: 'Projects Built' },
    { value: '2+', label: 'Smart Contracts Deployed' },
    { value: 'B.Tech', label: 'CSE ADTU' }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-background">
      {/* Decorative background grids */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30 dark:opacity-20 select-none">
        <div className="absolute top-1/4 right-[10%] w-[30rem] h-[30rem] bg-foreground/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-[5%] w-[25rem] h-[25rem] bg-foreground/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="max-w-8xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-xs sm:text-sm font-black tracking-[3px] uppercase text-foreground/50 mb-3">
              GET TO KNOW ME
            </p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
              About <span className="bg-gradient-to-r from-foreground via-foreground/70 to-foreground bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-16 h-1 bg-foreground mx-auto rounded-[2px] mt-3 opacity-80" />
          </div>

          {/* Dual-Column Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">

            {/* LEFT COLUMN: Biography & Stats */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Background Bio Card */}
              <Card className="border border-border/40 bg-card/40 dark:bg-card/30 backdrop-blur-md shadow-md rounded-[4px] overflow-hidden hover:border-foreground/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-6 h-6 text-foreground/80 animate-pulse" />
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">Biography & Journey</h3>
                  </div>

                  <p className="text-foreground/75 leading-relaxed mb-4 text-sm sm:text-base">
                    I'm a Computer Science undergraduate at Assam Down Town University with a strong interest in building production-ready software. I enjoy solving engineering problems through scalable backend systems, intuitive user interfaces, and modern cloud technologies.
                  </p>
                  <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
                    My work primarily focuses on full-stack development, database engineering, desktop applications, distributed systems, and developer productivity tools. I am dedicated to continuous learning, designing clean database workflows, and exploring bleeding-edge artificial intelligence, system design, and DevOps principles.
                  </p>
                </CardContent>
              </Card>

              {/* Stats Dashboard Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-[4px] bg-card/45 dark:bg-card/25 border border-border/40 text-center backdrop-blur-sm shadow-sm hover:border-foreground/25 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="block text-2xl sm:text-3xl font-black text-foreground">{stat.value}</span>
                    <span className="block text-[10px] sm:text-xs text-foreground/60 uppercase tracking-widest mt-1.5 font-bold">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="border border-border/40 bg-card/45 dark:bg-card/25 backdrop-blur-md shadow-md rounded-[4px] p-6 hover:border-foreground/20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2 border-b border-border/30 pb-4">
                  <Box className="w-5 h-5 text-foreground/80" />
                  <span>Technical Stack</span>
                </h3>

                <div className="flex flex-col gap-6">
                  {skillCategories.map((category, idx) => {
                    const Icon = category.icon;
                    return (
                      <div key={idx} className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-foreground/60 uppercase">
                          <Icon className="w-4 h-4 text-foreground/70" />
                          <span>{category.title}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="
                                px-3.5 py-1.5 
                                bg-background/80 dark:bg-card/90 backdrop-blur-sm
                                border border-border/60 rounded-[4px] 
                                text-xs font-semibold text-foreground/80
                                hover:border-foreground hover:bg-foreground hover:text-background 
                                hover:scale-105 transition-all duration-300 ease-out cursor-default
                              "
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>

          {/* Philosophy Highlights */}
          <div className="border-t border-border/30 pt-16">
            <h3 className="text-xl font-bold mb-8 text-center text-foreground/75 uppercase tracking-widest text-[11px] sm:text-xs flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4 text-foreground/60 animate-pulse" />
              <span>Developer Philosophy</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card
                    key={index}
                    className="
                      border border-border/40 bg-card/35 dark:bg-card/20 backdrop-blur-sm
                      hover:border-foreground/35 hover:shadow-lg hover:shadow-foreground/5 
                      hover:-translate-y-1.5 transition-all duration-300 group rounded-[4px]
                    "
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-[4px] bg-foreground/5 dark:bg-foreground/10 border border-border/60 mb-4 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-foreground group-hover:text-inherit transition-colors duration-300" />
                      </div>
                      <h4 className="text-base font-bold mb-2 text-foreground tracking-tight">{highlight.title}</h4>
                      <p className="text-xs text-foreground/60 leading-relaxed max-w-[200px]">{highlight.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
