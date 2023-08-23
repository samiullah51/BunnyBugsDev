const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    idealCandidate: {
      type: String,
      required: true,
    },
    requiredSkills: {
      type: Array,
      required: true,
    },
    otherRequirements: {
      type: String,
    },
    requiredExp: {
      type: String,
    },
    offering: {
      type: String,
    },
    salary: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("jobs", JobsSchema);
