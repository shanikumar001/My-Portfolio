import express from "express";
import { Profile } from "../models/Profile.js";
import { verifyAdmin } from "../middleware/auth.js";
import { initialProfile } from "../utils/seedData.js";
import { deleteFromCloudinary } from "../config/cloudinary.js";

const router = express.Router();

// GET profile (public)
router.get("/", async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = await Profile.create(initialProfile);
    }
    res.json({ success: true, data: profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ success: false, message: "Failed to fetch profile" });
  }
});

// PUT update profile (admin only)
router.put("/", verifyAdmin, async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile(initialProfile);
    }

    const {
      name,
      statusPill,
      typingTitles,
      bio,
      techChips,
      avatarUrl,
      avatarId,
      resumeUrl,
      aboutBio,
      stats,
      skillCategories,
      milestones,
      email,
      phone,
      location,
      socialLinks,
    } = req.body;

    // Handle avatar replacement in Cloudinary if needed
    if (avatarId && profile.avatarId && profile.avatarId !== avatarId) {
      await deleteFromCloudinary(profile.avatarId);
    }

    if (name !== undefined) profile.name = name;
    if (statusPill !== undefined) profile.statusPill = statusPill;
    if (typingTitles !== undefined) profile.typingTitles = typingTitles;
    if (bio !== undefined) profile.bio = bio;
    if (techChips !== undefined) profile.techChips = techChips;
    if (avatarUrl !== undefined) profile.avatarUrl = avatarUrl;
    if (avatarId !== undefined) profile.avatarId = avatarId;
    if (resumeUrl !== undefined) profile.resumeUrl = resumeUrl;
    if (aboutBio !== undefined) profile.aboutBio = aboutBio;
    if (stats !== undefined) profile.stats = stats;
    if (skillCategories !== undefined) profile.skillCategories = skillCategories;
    if (milestones !== undefined) profile.milestones = milestones;
    if (email !== undefined) profile.email = email;
    if (phone !== undefined) profile.phone = phone;
    if (location !== undefined) profile.location = location;
    if (socialLinks !== undefined) profile.socialLinks = socialLinks;

    const updatedProfile = await profile.save();
    res.json({ success: true, message: "Profile updated successfully", data: updatedProfile });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to update profile" });
  }
});

export default router;
