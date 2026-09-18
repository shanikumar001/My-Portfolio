import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import { seedDatabase } from "./src/utils/seedData.js";
import projectsRouter from "./src/routes/projects.js";
import profileRouter from "./src/routes/profile.js";
import uploadRouter from "./src/routes/upload.js";
import contactRouter from "./src/routes/contact.js";
import authRouter from "./src/routes/auth.js";

const app = express();
const PORT = process.env.PORT || 5002;

// Enable CORS for frontend
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "https://shanikumar.ziuro.com",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);
      
      const isAllowed =
        allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app") ||
        origin.endsWith(".ziuro.com");

      if (isAllowed || process.env.NODE_ENV !== "production") {
        return callback(null, true);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
  })
);

app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));

// Root endpoint for Render & browser validation
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "Balmiki Kumar (Shani Kumar) Portfolio API",
    version: "1.0.0",
    health: "/api/health",
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoints (supports both /health and /api/health)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Portfolio API is healthy and connected to MongoDB Atlas & Cloudinary",
    timestamp: new Date().toISOString(),
  });
});

// Mount API Routes
app.use("/api/projects", projectsRouter);
app.use("/api/profile", profileRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/contact", contactRouter);
app.use("/api/auth", authRouter);

// Backwards compatibility for root /contact endpoint
app.use("/contact", contactRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Global Error:", err.stack || err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start Server and Connect Database
const startServer = async () => {
  try {
    await connectDB();
    await seedDatabase();

    app.listen(PORT, () => {
      console.log(`🚀 Portfolio Backend running on http://localhost:${PORT}`);
      console.log(`📡 Connected to MongoDB Atlas & Cloudinary`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
