import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Rocket, 
  Heart, 
  GraduationCap, 
  Laptop, 
  Database, 
  Box, 
  Terminal, 
  Award, 
  Cpu, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Layers, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Server
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useProfile } from '../hooks/usePortfolio';

const About = () => {
  const { data: profile } = useProfile();
  const [activeTab, setActiveTab] = useState('all');

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

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeTab || c.title.toLowerCase().includes(activeTab));

  const totalSkillsCount = skillCategories.reduce((acc, curr) => acc + (curr.skills?.length || 0), 0);

  // Key stats verified from resume & profile in strictly black & white
  const stats = [
    {
      value: profile?.stats?.cgpa || '9.05',
      label: 'B.Tech CGPA',
      sublabel: 'Assam Down Town University',
      icon: Award,
      badge: 'Top 1% CSE',
    },
    {
      value: profile?.stats?.platformsBuilt || '2',
      label: 'Platforms Built',
      sublabel: 'ZiuroDB & ZiuroCoding',
      icon: Rocket,
      badge: 'Production Ready',
    },
    {
      value: profile?.stats?.techTools || '15+',
      label: 'Tech Stack Tools',
      sublabel: 'Modern Distributed Stack',
      icon: Cpu,
      badge: 'Core Competency',
    },
    {
      value: profile?.stats?.gradYear || '2028',
      label: 'Graduation Year',
      sublabel: 'B.Tech Computer Science',
      icon: GraduationCap,
      badge: 'Undergraduate',
    }
  ];

  const aboutBio = profile?.aboutBio || "Dedicated Computer Science & Engineering undergraduate at Assam Down Town University (Expected 2028 | CGPA: 9.05). Proven founder and systems architect who built ZiuroDB, an automated database management and REST API engine, and ZiuroCoding, a real-time coding contest sandbox. Proficient across full-stack engineering, databases, distributed task queues, and applied machine learning.";

  // Core engineering philosophies
  const philosophies = [
    {
      icon: Zap,
      title: "Distributed Task Queues",
      subtitle: "High-Throughput Sandboxes",
      description: "Architecting non-blocking code evaluation engines with Redis & BullMQ task queues, ensuring high availability and anti-cheat sandbox isolation.",
    },
    {
      icon: Server,
      title: "Universal Database Tooling",
      subtitle: "Multi-Engine Integration",
      description: "Unifying SQL & NoSQL engines (MongoDB, MySQL, PostgreSQL) into cohesive REST APIs, query pipelines, and centralized administration portals.",
    },
    {
      icon: Laptop,
      title: "Modern Desktop & Web UIs",
      subtitle: "Sub-Second Interactivity",
      description: "Crafting fluid, glassmorphic interfaces with React, Next.js, Electron.js, and Tailwind CSS engineered for seamless developer ergonomics.",
    },
    {
      icon: Sparkles,
      title: "Applied Machine Learning",
      subtitle: "Predictive Intelligence",
      description: "Leveraging Scikit-learn, feature engineering, and LLM prompt architectures to automate workflows and empower intelligent developer tools.",
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-background text-foreground">
      {/* Monochromatic ambient background grids */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <div className="absolute top-1/6 right-[5%] w-[32rem] h-[32rem] bg-foreground/5 rounded-[4px] blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 left-[5%] w-[28rem] h-[28rem] bg-foreground/5 rounded-[4px] blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-30 dark:opacity-40" />
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="max-w-8xl mx-auto space-y-16">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] border border-border/80 bg-foreground/5 backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-foreground animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-foreground/80">
                FOUNDER • SYSTEMS ARCHITECT • ADTU '28
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
              About <span className="underline decoration-foreground/40 underline-offset-8">Me</span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
              Transforming complex distributed data infrastructure into elegant, high-throughput developer platforms and responsive software systems.
            </p>

            <div className="w-20 h-1 bg-foreground/40 rounded-[2px]" />
          </div>

          {/* 1. Key Metrics Bento Grid (Border radius strictly <= 4px) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="
                    relative p-6 rounded-[4px] bg-card/70 dark:bg-card/40 
                    border border-border/70 hover:border-foreground/50
                    backdrop-blur-md shadow-sm
                    transition-all duration-300 hover:-translate-y-1
                    group overflow-hidden
                  "
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[4px] bg-foreground/5 border border-border/70 flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                      <Icon className="w-5 h-5 transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-[4px] bg-foreground/5 border border-border/70 text-foreground/80">
                      {stat.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-foreground/85">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-muted-foreground leading-tight">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 2. Main Bento Grid: Executive Biography & Technical Matrix (Border radius <= 4px) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Founder Biography & Terminal HUD (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-[4px] bg-card/70 dark:bg-card/35 border border-border/70 backdrop-blur-md shadow-sm space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-foreground/60" />

              <div className="space-y-6">
                {/* Top Status Pill */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-foreground/5 border border-border/80 text-foreground text-xs font-mono font-bold">
                    <span className="w-2 h-2 rounded-[2px] bg-foreground animate-pulse" />
                    <span>Open to High-Impact Opportunities</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-foreground" />
                    <span>ADTU B.Tech CSE '28</span>
                  </span>
                </div>

                {/* Heading */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    Engineering at the Intersection of AI, Distributed Systems & Scale
                  </h3>
                  <p className="text-xs font-mono text-foreground/70 font-semibold tracking-wider uppercase">
                    Balmiki Kumar — Founder of ZiuroDB & ZiuroCoding
                  </p>
                </div>

                {/* Narrative Bio */}
                <p className="text-foreground/80 leading-relaxed text-sm sm:text-base font-normal">
                  {aboutBio}
                </p>

                {/* Quote Highlight Box */}
                <div className="p-4 rounded-[4px] bg-foreground/[0.03] border-l-4 border-foreground border-t border-r border-b border-border/70 text-xs sm:text-sm font-mono text-foreground/90 italic leading-relaxed">
                  "Obsessed with turning complex distributed database internals and asynchronous execution pipelines into frictionless, sub-second developer experiences."
                </div>

                {/* Mini Dev HUD / Terminal Box (strictly B&W, border-radius <= 4px) */}
                <div className="rounded-[4px] bg-card border border-border/80 overflow-hidden font-mono text-xs shadow-inner">
                  <div className="px-4 py-2 bg-muted/40 border-b border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-foreground/25" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-foreground/40" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-foreground/60" />
                      <span className="ml-2 text-foreground/70">shani@archlinux:~</span>
                    </div>
                    <span className="text-[10px] text-foreground/60">node v20.x • verified</span>
                  </div>

                  <div className="p-4 space-y-1.5 text-[11px] sm:text-xs">
                    <div className="text-muted-foreground">
                      <span className="text-foreground font-bold">user@balmiki:~$</span> cat credentials.json
                    </div>
                    <div className="text-foreground/70">
                      &#123;
                    </div>
                    <div className="pl-4 text-foreground/90">
                      <span className="text-foreground/60">"role"</span>: <span className="text-foreground font-semibold">"Founder @ ZiuroDB & ZiuroCoding"</span>,
                    </div>
                    <div className="pl-4 text-foreground/90">
                      <span className="text-foreground/60">"degree"</span>: <span className="text-foreground font-semibold">"B.Tech CSE (Assam Down Town University)"</span>,
                    </div>
                    <div className="pl-4 text-foreground/90">
                      <span className="text-foreground/60">"academicScore"</span>: <span className="text-foreground font-bold">"CGPA: 9.05 / 10"</span>,
                    </div>
                    <div className="pl-4 text-foreground/90">
                      <span className="text-foreground/60">"coreStrengths"</span>: [<span className="text-foreground">"Distributed Systems"</span>, <span className="text-foreground">"DB Engines"</span>, <span className="text-foreground">"AI/ML"</span>]
                    </div>
                    <div className="text-foreground/70">
                      &#125;
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Geographic / Academic Footer Chips */}
              <div className="pt-4 border-t border-border/50 flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                <span className="px-3 py-1 rounded-[4px] bg-foreground/5 border border-border/70 flex items-center gap-1.5 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-foreground" />
                  Assam Down Town University
                </span>
                <span className="px-3 py-1 rounded-[4px] bg-foreground/5 border border-border/70 flex items-center gap-1.5 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-foreground/70" />
                  Guwahati, Assam • Patna, Bihar
                </span>
                <span className="px-3 py-1 rounded-[4px] bg-foreground/5 border border-border/70 flex items-center gap-1.5 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-foreground/40" />
                  Full-Stack & Cloud Architecture
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Technical Ecosystem (5 cols, border radius <= 4px) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-[4px] bg-card/70 dark:bg-card/35 border border-border/70 backdrop-blur-md shadow-sm space-y-6 relative overflow-hidden">
              <div className="space-y-6">
                
                {/* Header with Tool Count */}
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[4px] bg-foreground/5 border border-border/70 flex items-center justify-center text-foreground">
                      <Box className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground tracking-tight">Technical Stack</h3>
                      <p className="text-[11px] font-mono text-muted-foreground">Tools & Frameworks</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-[4px] bg-foreground/5 border border-border/70 text-foreground">
                    {totalSkillsCount} Tools
                  </span>
                </div>

                {/* Filter Navigation Tabs (rounded-[4px]) */}
                <div className="flex flex-wrap gap-1.5 p-1 rounded-[4px] bg-muted/40 border border-border/70 select-none">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded-[3px] transition-all ${
                      activeTab === 'all'
                        ? 'bg-foreground text-background shadow-xs'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    All
                  </button>
                  {skillCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`px-2.5 py-1.5 text-xs font-mono font-bold rounded-[3px] transition-all flex items-center gap-1 ${
                        activeTab === cat.id
                          ? 'bg-foreground text-background shadow-xs'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <span>{cat.title.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>

                {/* Categorized Skills Render */}
                <div className="space-y-5">
                  {filteredCategories.map((category, idx) => {
                    const CategoryIcon = category.icon;
                    return (
                      <div key={idx} className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider uppercase text-foreground/80">
                          <div className="flex items-center gap-2">
                            <CategoryIcon className="w-4 h-4 text-foreground" />
                            <span>{category.title}</span>
                          </div>
                          <span className="text-[10px] text-muted-foreground font-normal">
                            {category.skills.length}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {category.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="
                                px-3 py-1 rounded-[3px]
                                bg-card border border-border/70 hover:border-foreground
                                text-xs font-medium text-foreground
                                hover:bg-foreground hover:text-background
                                hover:scale-105 transition-all duration-200
                                cursor-default shadow-xs flex items-center gap-1.5
                              "
                            >
                              <span className="w-1.5 h-1.5 rounded-[1px] bg-foreground/40" />
                              <span>{skill}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stack Distribution Breakdown Indicator (pure monochrome, border-radius <= 4px) */}
              <div className="pt-4 border-t border-border/50 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span>Architecture Balance</span>
                  <span className="text-foreground font-bold">100% Production Tested</span>
                </div>
                <div className="w-full h-2 rounded-[2px] bg-muted/60 overflow-hidden flex border border-border/60">
                  <div className="h-full bg-foreground w-[35%]" title="Databases & DevOps (35%)" />
                  <div className="h-full bg-foreground/75 w-[35%]" title="Full-Stack & Desktop (35%)" />
                  <div className="h-full bg-foreground/50 w-[20%]" title="AI & Data Science (20%)" />
                  <div className="h-full bg-foreground/25 w-[10%]" title="Languages & Algorithms (10%)" />
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pt-1">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-[1px] bg-foreground" /> DB/DevOps</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-[1px] bg-foreground/75" /> Full-Stack</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-[1px] bg-foreground/50" /> AI/ML</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-[1px] bg-foreground/25" /> Core</span>
                </div>
              </div>

            </div>

          </div>

          {/* 3. Developer Philosophy & Core Competencies (4 Pillars, rounded-[4px]) */}
          <div className="pt-8 space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-foreground uppercase">
                <Terminal className="w-4 h-4 text-foreground animate-pulse" />
                <span>Core Architectural Principles</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                How I Design & Engineer Software
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
                Guiding paradigms cultivated while building ZiuroDB, ZiuroCoding, and high-concurrency systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {philosophies.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <Card
                    key={index}
                    className="
                      relative p-6 rounded-[4px] bg-card/70 dark:bg-card/35
                      border border-border/70 hover:border-foreground/50
                      backdrop-blur-md shadow-sm hover:shadow-md
                      hover:-translate-y-1.5 transition-all duration-300
                      group overflow-hidden flex flex-col justify-between
                    "
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-[4px] bg-foreground/5 border border-border/70 flex items-center justify-center group-hover:scale-105 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                        <ItemIcon className="w-5 h-5 text-foreground transition-colors" />
                      </div>

                      <div className="space-y-1">
                        <div className="text-[11px] font-mono font-bold text-foreground/60 tracking-wider uppercase">
                          {item.subtitle}
                        </div>
                        <h4 className="text-lg font-bold text-foreground tracking-tight">
                          {item.title}
                        </h4>
                      </div>

                      <p className="text-xs text-foreground/75 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      <span>Production Standard</span>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
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
