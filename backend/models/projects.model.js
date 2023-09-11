const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
    projectLink: {
      type: String,
      required: true,
    },
    projectImage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("projects", ProjectsSchema);
