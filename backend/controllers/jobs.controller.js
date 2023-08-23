const Job = require("../models/jobs.model");

// Add Job
const AddJob = async (req, res) => {
  try {
    const newJob = new Job({
      jobTitle: req.body.jobTitle,
      status: req.body.status,
      idealCandidate: req.body.idealCandidate,
      requiredSkills: req.body.requiredSkills,
      otherRequirements: req.body.otherRequirements,
      requiredExp: req.body.requiredExp,
      offering: req.body.offering,
      salary: req.body.salary,
      city: req.body.city,
      address: req.body.address,
    });
    const savedJob = await newJob.save();
    res.status(201).json({ success: true, data: savedJob, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all Jobs
const GetAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
    res.status(201).json({ success: true, data: allJobs, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all PUBLISH jobs
const GetAllPublishJobs = async (req, res) => {
  try {
    const allPublishjobs = await Job.find({ status: "publish" });
    res.status(201).json({ success: true, data: allPublishjobs, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all Draft jobs
const GetAllDraftJobs = async (req, res) => {
  try {
    const allDraftJobs = await Job.find({ status: "draft" });
    res.status(201).json({ success: true, data: allDraftJobs, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Delete a Specific job
const deleteJob = async (req, res) => {
  try {
    const deleteJob = await Job.findByIdAndRemove(req.params.id);
    deleteJob &&
      res.status(201).json({
        success: true,
        data: "Project Deleted Succesfully",
        error: null,
      });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Update a Specific Job
const updateJob = async (req, res) => {
  try {
    const updateJob = await Job.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          jobTitle: req.body.jobTitle,
          status: req.body.status,
          idealCandidate: req.body.idealCandidate,
          requiredSkills: req.body.requiredSkills,
          otherRequirements: req.body.otherRequirements,
          requiredExp: req.body.requiredExp,
          offering: req.body.offering,
          salary: req.body.salary,
          city: req.body.city,
          address: req.body.address,
        },
      },
      { new: true }
    );

    res.status(400).json({ success: true, data: updateJob, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

module.exports = {
  AddJob,
  GetAllJobs,
  GetAllPublishJobs,
  GetAllDraftJobs,
  deleteJob,
  updateJob,
};
