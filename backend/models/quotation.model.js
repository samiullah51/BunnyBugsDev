const mongoose = require("mongoose");
const QuotationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    options: {
      type: Object,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("quotation", QuotationSchema);
