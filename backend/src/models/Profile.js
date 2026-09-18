import mongoose from "mongoose";

const milestoneSchema = new mongoose.Schema({
  step: { type: Number, default: 1 },
  year: { type: String, default: "" },
  title: { type: String, default: "" },
  institution: { type: String, default: "" },
  score: { type: String, default: "" },
  coursework: { type: [String], default: [] },
  location: { type: String, default: "" },
  badge: { type: String, default: "" },
  side: { type: String, enum: ["left", "right"], default: "right" },
  image: { type: String, default: "" },
});

const skillCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  skills: { type: [String], default: [] },
});

const profileSchema = new mongoose.Schema(
  {
    // Hero Section
    name: { type: String, default: "Shani Kumar" },
    statusPill: {
      type: String,
      default: "FOUNDER @ ZIURODB & ZIUROCODING | B.TECH CSE (CGPA: 9.05)",
    },
    typingTitles: {
      type: [String],
      default: [
        "FOUNDER OF ZIURODB & ZIUROCODING",
        "FULL-STACK & DATABASE DEVELOPER",
        "B.TECH CSE (CGPA: 9.05 | ADTU)",
        "AI & MACHINE LEARNING DEVELOPER",
        "DESKTOP & DISTRIBUTED SYSTEMS CREATOR",
      ],
    },
    bio: {
      type: String,
      default:
        "Founder of ZiuroDB and ZiuroCoding. Building production-ready database management platforms, automated REST API engines, code execution sandboxes, and modern full-stack systems.",
    },
    techChips: {
      type: [String],
      default: [
        "Java & Python",
        "React & Next.js",
        "TypeScript & Node.js",
        "MongoDB, MySQL & Postgres",
        "Redis, BullMQ & Docker",
        "ZiuroDB",
      ],
    },
    avatarUrl: { type: String, default: "" },
    avatarId: { type: String, default: "" },
    resumeUrl: { type: String, default: "/cv.pdf" },

    // About Section
    aboutBio: {
      type: String,
      default:
        "Dedicated Computer Science & Engineering undergraduate at Assam Down Town University (Expected 2028 | CGPA: 9.05). Proven founder and systems architect who built ZiuroDB, an automated database management and REST API engine, and ZiuroCoding, a real-time coding contest sandbox. Proficient across full-stack engineering, databases, distributed task queues, and applied machine learning.",
    },
    stats: {
      cgpa: { type: String, default: "9.05" },
      platformsBuilt: { type: String, default: "2" },
      techTools: { type: String, default: "15+" },
      gradYear: { type: String, default: "2028" },
    },
    skillCategories: {
      type: [skillCategorySchema],
      default: [],
    },

    // Journey / Education Milestones
    milestones: {
      type: [milestoneSchema],
      default: [],
    },

    // Contact & Socials
    email: { type: String, default: "shanikumar00321@gmail.com" },
    phone: { type: String, default: "+91 6201970584" },
    location: { type: String, default: "Guwahati, Assam" },
    socialLinks: {
      youtube: { type: String, default: "https://www.youtube.com/@Coding_with_Shani" },
      instagram: { type: String, default: "https://www.instagram.com/sr.coding01/" },
      linkedin: { type: String, default: "https://www.linkedin.com/in/Shani-kumar" },
      github: { type: String, default: "https://github.com/shanikumar001" },
    },
  },
  {
    timestamps: true,
  }
);

export const Profile = mongoose.model("Profile", profileSchema);
