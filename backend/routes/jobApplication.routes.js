const router = require("express").Router();
const multer = require("multer");
const jobApplicationModel = require("../models/jobApplication.model");
// test model
// Define a schema and model for your PDF files

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/add", upload.single("userFile"), async (req, res) => {
  try {
    const { filename, path } = req.file;
    const username = req.body.username;
    const pdf = new jobApplicationModel({
      jobId: req.body.jobId,
      applicationByName: req.body.applicationByName,
      applicationByEmail: req.body.applicationByEmail,
      applicationByContact: req.body.applicationByContact,
      filename: filename,
      path: path,
      username: username,
    });
    await pdf.save();
    res.status(201).send(pdf);
  } catch (error) {
    res.status(500).send("Error uploading PDF");
  }
});

module.exports = router;
