const HomeBanner = require("../models/homeBanner.model");

// Add banner
const AddHomeBanner = async (req, res) => {
  try {
    const newBanner = new HomeBanner({
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
    });
    const savedBanner = await newBanner.save();

    res.status(201).json({ success: true, data: savedBanner, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Get banner
const GetHomeBanner = async (req, res) => {
  try {
    const allBanners = await HomeBanner.find();
    res.status(201).json({ success: true, data: allBanners, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// edit banner
// Get banner
const EditHomeBanner = async (req, res) => {
  try {
    const allBanners = await HomeBanner.findByIdAndUpdate(
      req.params.bannerId,
      {
        $set: {
          title: req.body.title,
          image: req.body.image,
          description: req.body.description,
        },
      },
      { new: true }
    );
    res.status(201).json({ success: true, data: allBanners, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

module.exports = {
  AddHomeBanner,
  GetHomeBanner,
  EditHomeBanner,
};
