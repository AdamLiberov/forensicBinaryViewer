// ...existing code...
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// store file on disk (or use memoryStorage if you prefer)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    // sanitize or generate unique name in production
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } }); // 50MB limit

app.get("/", (req, res) => {
  res.json("Hello from the root path!");
});

app.post("/binary", upload.single("binary"), (req, res) => {
  console.log("file metadata:", req.file); // path, originalname, mimetype, size
  console.log("other fields:", req.body); // any other form fields
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  res.json({ success: true, filename: req.file.filename });
});

app.listen(port, () => console.log(`server has started on ${port}`));