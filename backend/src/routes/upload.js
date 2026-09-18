import express from "express";
import { upload, uploadToCloudinary } from "../config/cloudinary.js";
import { verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

// POST upload single image to Cloudinary (admin only)
router.post("/", verifyAdmin, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file uploaded" });
    }

    const folder = req.body.folder || "portfolio";
    const result = await uploadToCloudinary(req.file.buffer, folder);

    res.json({
      success: true,
      message: "Image uploaded successfully to Cloudinary",
      data: {
        url: result.secure_url,
        public_id: result.public_id,
        format: result.format,
        width: result.width,
        height: result.height,
      },
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to upload image" });
  }
});

export default router;
