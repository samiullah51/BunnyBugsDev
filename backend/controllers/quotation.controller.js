const Quotation = require("../models/quotation.model");

// Add Quotation
const AddQuotation = async (req, res) => {
  try {
    const newQuotation = new Quotation({
      title: req.body.title,
      category: req.body.category,
      options: req.body.options,
    });
    const savedQuotation = await newQuotation.save();

    res.status(201).json({ success: true, data: savedQuotation, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Get all Quotations
const GetQuotations = async (req, res) => {
  try {
    const query = req.query.cat;
    const allQuotations = await Quotation.find({ category: query });
    res.status(201).json({ success: true, data: allQuotations, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

module.exports = {
  AddQuotation,
  GetQuotations,
};
