const Quotation = require("../models/quotation.model");
const sendEmail = require("../utils/sendEmail");

// Add Quotation
const AddQuotation = async (req, res) => {
  try {
    const newQuotation = new Quotation({
      title: req.body.title,
      options: req.body.options,
    });
    const savedQuotation = await newQuotation.save();
    savedQuotation && sendEmail(req.body.username, req.body.email);
    res.status(201).json({ success: true, data: savedQuotation, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Get all Quotation
const GetQuotations = async (req, res) => {
  try {
    const allQuotations = await Quotation.find();
    res.status(201).json({ success: true, data: allQuotations, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};
module.exports = { AddQuotation, GetQuotations };
