import express from "express";
import { Project } from "../models/Project.js";
import { verifyAdmin } from "../middleware/auth.js";
import { deleteFromCloudinary } from "../config/cloudinary.js";

const router = express.Router();

// GET all projects (public)
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ success: false, message: "Failed to fetch projects" });
  }
});

// GET single project by ID (public)
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch project" });
  }
});

// POST create project (admin only)
router.post("/", verifyAdmin, async (req, res) => {
  try {
    const { title, description, tags, image, imageId, liveUrl, githubUrl, featured, order } = req.body;

    if (!title || !description) {
      return res.status(400).json({ success: false, message: "Title and description are required" });
    }

    const newProject = await Project.create({
      title,
      description,
      tags: Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
      image: image || "",
      imageId: imageId || "",
      liveUrl: liveUrl || "",
      githubUrl: githubUrl || "",
      featured: featured !== undefined ? featured : true,
      order: Number(order) || 0,
    });

    res.status(201).json({ success: true, message: "Project created successfully", data: newProject });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to create project" });
  }
});

// PUT update project (admin only)
router.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    const { title, description, tags, image, imageId, liveUrl, githubUrl, featured, order } = req.body;

    // If a new image was uploaded and there was an old imageId that differs, delete the old one from Cloudinary
    if (imageId && project.imageId && project.imageId !== imageId) {
      await deleteFromCloudinary(project.imageId);
    }

    project.title = title !== undefined ? title : project.title;
    project.description = description !== undefined ? description : project.description;
    if (tags !== undefined) {
      project.tags = Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map((t) => t.trim()).filter(Boolean) : [];
    }
    project.image = image !== undefined ? image : project.image;
    project.imageId = imageId !== undefined ? imageId : project.imageId;
    project.liveUrl = liveUrl !== undefined ? liveUrl : project.liveUrl;
    project.githubUrl = githubUrl !== undefined ? githubUrl : project.githubUrl;
    project.featured = featured !== undefined ? featured : project.featured;
    project.order = order !== undefined ? Number(order) : project.order;

    const updatedProject = await project.save();
    res.json({ success: true, message: "Project updated successfully", data: updatedProject });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to update project" });
  }
});

// DELETE project (admin only)
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    // Delete image from Cloudinary if stored
    if (project.imageId) {
      await deleteFromCloudinary(project.imageId);
    }

    await project.deleteOne();
    res.json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ success: false, message: "Failed to delete project" });
  }
});

export default router;
