const User = require("../models/user.model");

// Register a User
const UserRegister = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
    });
    const savedUser = await newUser.save();
    res.status(201).json({ success: true, data: savedUser, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Login a registered User
const UserLogIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // Check if user exist or not
    if (!user) {
      res
        .status(401)
        .json({ success: false, data: null, error: "User Not Found" });
      return false;
    } else {
      if (user.password !== req.body.password) {
        res.status(400).json({
          success: false,
          data: null,
          error: "Invalid Email or Password",
        });
        return false;
      } else {
        res.status(400).json({ success: true, data: user, error: null });
      }
    }
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

module.exports = { UserRegister, UserLogIn };
