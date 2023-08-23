const Project = require("../models/projects.model");

// Add Project
const AddProject = async (req, res) => {
  try {
    const newProject = new Project({
      projectName: req.body.projectName,
      status: req.body.status,
      projectDescription: req.body.projectDescription,
      projectLink: req.body.projectLink,
      projectImage: req.body.projectImage,
    });
    const savedProject = await newProject.save();
    res.status(201).json({ success: true, data: savedProject, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all Projects
const GetAllProjects = async (req, res) => {
  try {
    const allProjects = await Project.find();
    res.status(201).json({ success: true, data: allProjects, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all PUBLISH projects
const GetAllPublishProjects = async (req, res) => {
  try {
    const allPublishProjects = await Project.find({ status: "publish" });
    res
      .status(201)
      .json({ success: true, data: allPublishProjects, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all Draft projects
const GetAllDraftProjects = async (req, res) => {
  try {
    const allDraftProjects = await Project.find({ status: "draft" });
    res
      .status(201)
      .json({ success: true, data: allDraftProjects, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Delete a Specific Project
const deleteProject = async (req, res) => {
  try {
    const deleteProject = await Project.findByIdAndRemove(req.params.id);
    deleteProject &&
      res.status(201).json({
        success: true,
        data: "Project Deleted Succesfully",
        error: null,
      });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Update a Specific Project
const updateProject = async (req, res) => {
  try {
    const updateProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          projectName: req.body.projectName,
          status: req.body.status,
          projectDescription: req.body.projectDescription,
          projectLink: req.body.projectLink,
          projectImage: req.body.projectImage,
        },
      },
      { new: true }
    );

    res.status(400).json({ success: true, data: updateProject, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

module.exports = {
  AddProject,
  GetAllProjects,
  GetAllPublishProjects,
  GetAllDraftProjects,
  deleteProject,
  updateProject,
};
