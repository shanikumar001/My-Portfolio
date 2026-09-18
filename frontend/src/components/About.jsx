import React, { useRef } from 'react';
import {
  Code2,
  GraduationCap,
  Laptop,
  Database,
  Terminal,
  Award,
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  MapPin,
  Server,
  Layers
} from 'lucide-react';
import { useProfile } from '../hooks/usePortfolio';
import InteractiveGridBackground from './ui/InteractiveGridBackground';

const About = () => {
  const aboutRef = useRef(null);
  const { data: profile } = useProfile();

  // Monochromatic black & white categories
  const defaultSkillCategories = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: Terminal,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      id: "ai-ml",
      title: "AI / ML & Data Science",
      icon: Sparkles,
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Machine Learning", "Deep Learning", "Prompt Engineering", "LLM Integration"]
    },
    {
      id: "fullstack",
      title: "Full-Stack & Desktop",
      icon: Laptop,
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "REST APIs", "Socket.io", "Electron.js", "Tailwind CSS", "Flutter"]
    },
    {
      id: "databases",
      title: "Databases & Cloud / DevOps",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase Firestore", "Redis", "Docker", "BullMQ", "Vercel", "Git", "GitHub"]
    }
  ];

  // Hydrate from MongoDB profile if customized via admin dashboard
  const skillCategories = profile?.skillCategories && profile.skillCategories.length > 0
    ? profile.skillCategories.map((cat, i) => {
      const icons = [Terminal, Sparkles, Laptop, Database];
      return {
        id: cat.title?.toLowerCase().replace(/[^a-z0-9]/g, '-') || `cat-${i}`,
        title: cat.title,
        icon: icons[i % icons.length] || Code2,
        skills: cat.skills || []
      };
    })
    : defaultSkillCategories;

  // Key stats verified from resume & profile
  const stats = [
    {
      value: profile?.stats?.cgpa || '9.05',
      label: 'B.Tech CGPA',
      sublabel: 'Assam Down Town University',
      icon: Award,
    },
    {
      value: profile?.stats?.platformsBuilt || '2',
      label: 'Platforms Built',
      sublabel: 'ZiuroDB & ZiuroCoding',
      icon: Layers,
    },
    {
      value: profile?.stats?.techTools || '15+',
      label: 'Tech Stack Tools',
      sublabel: 'Modern Distributed Stack',
      icon: Cpu,
    },
    {
      value: profile?.stats?.gradYear || '2028',
      label: 'Graduation Year',
      sublabel: 'B.Tech Computer Science',
      icon: GraduationCap,
    }
  ];

  const aboutBio = profile?.aboutBio || "Dedicated Computer Science & Engineering undergraduate at Assam Down Town University (Expected 2028 | CGPA: 9.05). Proven founder and systems architect who built ZiuroDB, an automated database management and REST API engine, and ZiuroCoding, a real-time coding contest sandbox. Proficient across full-stack engineering, databases, distributed task queues, and applied machine learning.";

  // Core engineering focus areas
  const principles = [
    {
      icon: Zap,
      title: "Distributed Task Queues",
      description: "Architecting non-blocking code evaluation engines with Redis & BullMQ task queues, ensuring high availability and anti-cheat sandbox isolation.",
    },
    {
      icon: Server,
      title: "Database Architecture",
      description: "Unifying SQL & NoSQL engines (MongoDB, MySQL, PostgreSQL) into cohesive REST APIs, query pipelines, and centralized administration portals.",
    },
    {
      icon: Laptop,
      title: "Full-Stack Ergonomics",
      description: "Crafting fluid, accessible interfaces with React, Next.js, Electron.js, and modern CSS engineered for seamless developer ergonomics.",
    },
    {
      icon: Sparkles,
      title: "Applied Machine Learning",
      description: "Leveraging Scikit-learn, feature engineering, and LLM prompt architectures to automate workflows and build intelligent developer tools.",
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 sm:py-28 relative overflow-hidden bg-background text-foreground">
      {/* Interactive Cursor-Reactive Square Box Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* <InteractiveGridBackground gridSize={48} containerRef={aboutRef} /> */}
        {/* Soft top and bottom fades for smooth section transitions */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-8xl relative z-10">
        <div className="space-y-16">

          {/* Section Header */}
          <div className="flex flex-col items-start text-left space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              Background & Expertise
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
              Founder of ZiuroDB & ZiuroCoding. Designing robust systems, database engines, and full-stack software.
            </p>
            <div className="w-12 h-0.5 bg-foreground/30 rounded-[1px] mt-2" />
          </div>

          {/* 1. Key Metrics Ribbon (Interactive Hover Cards) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="
                    p-5 sm:p-6 rounded-[4px] bg-card/80 dark:bg-card/50 border border-border/70
                    hover:border-foreground hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1 hover:bg-card
                    transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-3
                  "
                >
                  <div className="w-9 h-9 rounded-[4px] bg-foreground/5 border border-border/70 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black tracking-tight text-foreground group-hover:scale-105 transition-transform duration-200 origin-left">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-foreground/80 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 2. Main Balanced 2-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column: Narrative & Credentials (7 cols) */}
            <div className="lg:col-span-7 space-y-6 border rounded-[5px] p-5 shadow-white/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Engineering at the Intersection of Systems & AI
                </h3>

                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                  {aboutBio}
                </p>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  As the founder of <strong className="text-foreground font-semibold">ZiuroDB</strong> and <strong className="text-foreground font-semibold">ZiuroCoding</strong>, my focus centers on eliminating developer friction: building automated REST APIs over distributed database engines, constructing sandboxed multi-language code execution runners with BullMQ queues, and crafting intuitive user experiences.
                </p>
              </div>

              {/* Education & Roots Card (Interactive Hover Card) */}
              <div className="p-5 rounded-[4px] bg-card/80 dark:bg-card/50 border border-border/70 hover:border-foreground/80 hover:shadow-md hover:bg-card transition-all duration-300 space-y-4 group cursor-pointer">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-foreground/80 border-b border-border/50 pb-2.5">
                  <GraduationCap className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform duration-200" />
                  <span>Academic Background</span>
                </div>

                <div className="space-y-1">
                  <div className="text-sm sm:text-base font-bold text-foreground group-hover:text-foreground">
                    Assam Down Town University, Guwahati
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">
                    B.Tech Computer Science & Engineering • Expected 2028
                  </div>
                  <div className="text-xs font-mono font-semibold text-foreground/90 pt-1">
                    Cumulative GPA: <span className="underline decoration-foreground/40 font-bold text-foreground">9.05 / 10</span> (Consistent Academic Top Tier)
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-foreground/70" /> Guwahati, Assam
                  </span>
                  <span>•</span>
                  <span>Patna, Bihar</span>
                  <span>•</span>
                  <span className="text-foreground/80 font-semibold">Open to Full-Stack & Systems Roles</span>
                </div>
              </div>

              {/* Focus Pillars Chips (Interactive Hover Chips) */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                  Core Competency Areas
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {["Distributed Task Queues", "Database Internal Engines", "Full-Stack Web & Desktop", "Applied Machine Learning", "Real-Time Systems"].map((area, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-[4px] bg-card/80 border border-border/70 text-foreground/85 hover:bg-foreground hover:text-background hover:border-foreground hover:scale-105 cursor-pointer transition-all duration-200 shadow-xs active:scale-95 select-none"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Structured Technical Stack (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-[4px] bg-card/80 dark:bg-card/50 border border-border/70 hover:border-foreground/60 hover:shadow-md transition-all duration-300 space-y-6">
              <div className="border-b border-border/50 pb-3.5">
                <h3 className="text-lg font-bold text-foreground tracking-tight">
                  Technical Stack
                </h3>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">
                  Production-tested languages, tools & infrastructure
                </p>
              </div>

              <div className="space-y-5">
                {skillCategories.map((category, idx) => {
                  const CategoryIcon = category.icon;
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-foreground/80">
                        <CategoryIcon className="w-3.5 h-3.5 text-foreground" />
                        <span>{category.title}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="
                              px-2.5 py-1 rounded-[3px]
                              bg-background/90 border border-border/70
                              text-xs font-mono text-foreground/85
                              hover:bg-foreground hover:text-background hover:border-foreground hover:scale-105
                              cursor-pointer transition-all duration-200 shadow-xs active:scale-95 select-none
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
            </div>

          </div>

          {/* 3. Architectural Principles (Interactive Hover Cards) */}
          <div className="pt-6 space-y-6">
            <div className="text-start space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                How I Build Software
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {principles.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={index}
                    className="
                      p-5 rounded-[4px] bg-card/80 dark:bg-card/50 border border-border/70
                      hover:border-foreground hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1.5 hover:bg-card
                      transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-4
                    "
                  >
                    <div className="space-y-3">
                      <div className="w-9 h-9 rounded-[4px] bg-foreground/5 border border-border/70 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-foreground tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      <span>Production Ready</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-foreground/70" />
                    </div>
                  </div>
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
