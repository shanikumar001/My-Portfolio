import { Project } from "../models/Project.js";
import { Profile } from "../models/Profile.js";

export const initialProjects = [
  {
    title: "ZiuroDB - Centralized Database Management Platform & API Engine",
    description:
      "Full-stack database administration platform and automated REST API engine supporting MongoDB, MySQL, PostgreSQL, Firebase & Supabase. Features Ziuro-AI natural language interactions, custom ZQL query processor, and official npm package SDK.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "BullMQ",
      "Redis",
      "TypeScript",
      "Vercel",
    ],
    image: "",
    liveUrl: "https://www.ziurodb.com",
    githubUrl: "https://github.com/ziurodb",
    featured: true,
    order: 1,
  },
  {
    title: "ZiuroCoding - Code Assessment & Sandboxed Execution Platform",
    description:
      "High-performance coding assessment platform engineered for secure programming contests with Monaco Editor (Java, C++, Python). Built with an asynchronous Redis + Bull queue execution engine, real-time leaderboard, anti-cheating validation, and comprehensive admin analytics.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Bull Queue",
      "Monaco Editor",
      "Docker",
      "Socket.io",
      "Java",
      "Python",
    ],
    image: "",
    liveUrl: "https://coding.ziuro.com",
    githubUrl: "https://github.com/ziurocoding",
    featured: true,
    order: 2,
  },
  {
    title: "ZiuroWorkers - On-Demand Freelancer & Service Marketplace",
    description:
      "Full-stack service marketplace connecting clients with skilled professionals. Complete booking lifecycle, milestones escrow, messaging, review management, and status notifications.",
    tags: ["Next.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Socket.io"],
    image: "",
    liveUrl: "",
    githubUrl: "https://github.com/shanikumar001/ziuroworkers",
    featured: true,
    order: 3,
  },
];

export const initialProfile = {
  name: "Shani Kumar",
  statusPill: "FOUNDER @ ZIURODB & ZIUROCODING | B.TECH CSE (CGPA: 9.05)",
  typingTitles: [
    "FOUNDER OF ZIURODB & ZIUROCODING",
    "FULL-STACK & DATABASE DEVELOPER",
    "B.TECH CSE (CGPA: 9.05 | ADTU)",
    "AI & MACHINE LEARNING DEVELOPER",
    "DESKTOP & DISTRIBUTED SYSTEMS CREATOR",
  ],
  bio: "Founder of ZiuroDB and ZiuroCoding. Building production-ready database management platforms, automated REST API engines, code execution sandboxes, and modern full-stack systems.",
  techChips: [
    "Java & Python",
    "React & Next.js",
    "TypeScript & Node.js",
    "MongoDB, MySQL & Postgres",
    "Redis, BullMQ & Docker",
    "ZiuroDB",
  ],
  avatarUrl: "",
  resumeUrl: "/cv.pdf",
  aboutBio:
    "Dedicated Computer Science & Engineering undergraduate at Assam Down Town University (Expected 2028 | CGPA: 9.05). Proven founder and systems architect who built ZiuroDB, an automated database management and REST API engine, and ZiuroCoding, a real-time coding contest sandbox. Proficient across full-stack engineering, databases, distributed task queues, and applied machine learning.",
  stats: {
    cgpa: "9.05",
    platformsBuilt: "2",
    techTools: "15+",
    gradYear: "2028",
  },
  skillCategories: [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "AI / ML & Data Science",
      skills: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "Machine Learning",
        "Deep Learning",
        "Prompt Engineering",
        "LLM Integration",
      ],
    },
    {
      title: "Full-Stack & Desktop",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket.io",
        "Electron.js",
        "Tailwind CSS",
        "Flutter",
      ],
    },
    {
      title: "Databases & DevOps",
      skills: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "Redis",
        "Docker",
        "BullMQ",
        "Vercel",
        "Render",
        "Git",
      ],
    },
  ],
  milestones: [
    {
      step: 1,
      year: "2007 – 2021",
      title: "Early Roots & Foundation",
      institution: "State of Bihar, India",
      score: "Cultural & Academic Roots",
      coursework: ["Foundational Sciences", "Mathematics", "Logic & Reasoning"],
      location: "Patna / Bihar",
      badge: "Roots",
      side: "right",
    },
    {
      step: 2,
      year: "2021 – 2022",
      title: "Secondary Schooling (Class 10th)",
      institution: "Sutara Mehi Mission School",
      score: "CBSE Board",
      coursework: ["Mathematics", "Science", "Social Science", "Languages"],
      location: "Bihar",
      badge: "10th Grade",
      side: "left",
    },
    {
      step: 3,
      year: "2022 – 2024",
      title: "Senior Secondary (Class 12th PCM)",
      institution: "Jai Mala Siksha Niketan",
      score: "Physics, Chemistry & Mathematics",
      coursework: ["Physics", "Chemistry", "Advanced Mathematics", "Computer Science"],
      location: "Bihar",
      badge: "12th Grade",
      side: "right",
    },
    {
      step: 4,
      year: "2024 – 2028",
      title: "B.Tech Computer Science & Engineering",
      institution: "Assam Down Town University (ADTU)",
      score: "Current CGPA: 9.05 / 10.0",
      coursework: [
        "Data Structures & Algorithms",
        "Artificial Intelligence & ML",
        "Object-Oriented Programming (Java)",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
      location: "Guwahati, Assam",
      badge: "Undergraduate",
      side: "left",
    },
  ],
  email: "Shanikumar00321@gmail.com",
  phone: "+91 6201970584",
  location: "Guwahati, Assam",
  socialLinks: {
    youtube: "https://www.youtube.com/@Coding_with_Shani",
    instagram: "https://www.instagram.com/sr.coding01/",
    linkedin: "https://www.linkedin.com/in/Shani-kumar",
    github: "https://github.com/shanikumar001",
  },
};

export const seedDatabase = async () => {
  try {
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      console.log("🌱 Seeding initial verified projects...");
      await Project.insertMany(initialProjects);
      console.log("✅ Initial projects seeded successfully!");
    }

    const profileCount = await Profile.countDocuments();
    if (profileCount === 0) {
      console.log("🌱 Seeding initial verified profile...");
      await Profile.create(initialProfile);
      console.log("✅ Initial profile seeded successfully!");
    }
  } catch (error) {
    console.error("⚠️ Error seeding database:", error.message);
  }
};
