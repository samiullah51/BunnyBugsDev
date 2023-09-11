const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("./connection");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const mime = require("mime");
// Import all routers
const authRouter = require("./routes/user.routes");
const servicesRouter = require("./routes/services.routes");
const projectsRouter = require("./routes/projects.routes");
const teamRouter = require("./routes/team.routes");
const jobsRouter = require("./routes/jobs.routes");
const contactRouter = require("./routes/contact.routes");
const jobApplicationRouter = require("./routes/jobApplication.routes");
const quotationRouter = require("./routes/quotation.routes");

// dotEnv Configuration
dotenv.config();

// JSON Configuration
app.use(express.json());

// Cors Configuration
app.use(cors());

// Mongoose Connection
connectToDatabase();

// fileFilter: (req, file, cb) => {
//   if (mime.getType(file.originalname) === 'application/pdf') {
//     cb(null, true);
//   } else {
//     cb(new Error('Only PDF files are allowed'));
//   }

// API's routes
app.use("/api/v1/user", authRouter);
app.use("/api/v1/services", servicesRouter);
app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/team", teamRouter);
app.use("/api/v1/job", jobsRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/jobapplication", jobApplicationRouter);
app.use("/api/v1/quotation", quotationRouter);

app.get("/test/download/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "uploads", filename);
  res.status(200).json(filePath);
});
// Listening to a server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
