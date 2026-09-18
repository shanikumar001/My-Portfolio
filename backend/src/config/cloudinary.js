import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Use memory storage so files are held in memory before streaming to Cloudinary
const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

/**
 * Upload buffer directly to Cloudinary
 * @param {Buffer} buffer - File buffer from multer
 * @param {string} folder - Destination folder on Cloudinary
 */
export const uploadToCloudinary = (buffer, folder = "portfolio") => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    uploadStream.end(buffer);
  });
};

/**
 * Delete image from Cloudinary by public ID
 * @param {string} publicId
 */
export const deleteFromCloudinary = async (publicId) => {
  if (!publicId) return;
  try {
    return await cloudinary.uploader.destroy(publicId);
  } catch (err) {
    console.error("Error deleting from Cloudinary:", err.message);
  }
};

export default cloudinary;
