import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "ziname_super_secret_key_change_in_production_2026";

export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
};

export const verifyAdmin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({ success: false, message: "Forbidden: Admin access required" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Unauthorized: Invalid or expired token" });
  }
};
