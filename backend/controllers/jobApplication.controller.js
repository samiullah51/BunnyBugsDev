const JobApplication = require("../models/jobApplication.model");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// app.post("/test", upload.single("userFile"), async (req, res) => {
//   try {
//     const { filename, path } = req.file;
//     const pdf = new PdfModel({
//       filename: filename,
//       path: path,
//     });
//     await pdf.save();
//     res.status(201).send(pdf);
//   } catch (error) {
//     res.status(500).send("Error uploading PDF");
//   }
// });

// Add Job
const AddJobApplication = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  await upload.single("userFile");
  try {
    const newJobApplication = new JobApplication({
      jobId: req.body.jobId,
      applicationByName: req.body.applicationByName,
      applicationByEmail: req.body.applicationByEmail,
      applicationByContact: req.body.applicationByContact,
      filename: req.file.filename,
      path: req.file.path,
    });
    const savedJobApplication = await newJobApplication.save();
    res
      .status(201)
      .json({ success: true, data: savedJobApplication, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

module.exports = {
  AddJobApplication,
};
