const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    serviceDescription: {
      type: String,
      required: true,
    },
    serviceImage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("services", ServicesSchema);
