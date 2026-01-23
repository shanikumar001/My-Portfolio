import express from "express";
import cors from "cors";
import { db } from "./src/db.js";
import { contactTable } from "./src/schema.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await db.insert(contactTable).values({
      name,
      email,
      message,
    });

    res.status(201).json({ message: "Message stored successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(4000, () => {
  console.log("Server running on port 4000 🚀");
});
