import express from "express";
import { ContactMessage } from "../models/ContactMessage.js";
import { verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

// POST submit contact form (public)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newMessage = await ContactMessage.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully! Balmiki will get back to you soon.",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

// GET all contact messages (admin only)
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch messages" });
  }
});

// PUT mark message as read (admin only)
router.put("/:id/read", verifyAdmin, async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ success: false, message: "Message not found" });
    }

    message.read = req.body.read !== undefined ? req.body.read : true;
    await message.save();
    res.json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update message" });
  }
});

// DELETE message (admin only)
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ success: false, message: "Message not found" });
    }

    await message.deleteOne();
    res.json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete message" });
  }
});

export default router;
