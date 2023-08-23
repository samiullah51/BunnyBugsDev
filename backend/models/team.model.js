const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    memberName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    memberDesignation: {
      type: String,
      required: true,
    },
    socialLink: {
      type: String,
      required: true,
    },
    memberImage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("team", TeamSchema);
