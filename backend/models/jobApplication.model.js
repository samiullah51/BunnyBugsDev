const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
      required: true,
    },
    applicationByName: {
      type: String,
      required: true,
    },
    applicationByEmail: {
      type: String,
      required: true,
    },
    applicationByContact: {
      type: String,
      required: true,
    },
    filename: String,
    path: String,
    username: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("application", ApplicationSchema);
