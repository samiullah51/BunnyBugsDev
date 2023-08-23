const Team = require("../models/team.model");

// Add Team
const AddTeamMember = async (req, res) => {
  try {
    const newTeam = new Team({
      memberName: req.body.memberName,
      status: req.body.status,
      memberDesignation: req.body.memberDesignation,
      socialLink: req.body.socialLink,
      memberImage: req.body.memberImage,
    });
    const savedTeam = await newTeam.save();
    res.status(201).json({ success: true, data: savedTeam, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all Team Members
const GetAllTeamMembers = async (req, res) => {
  try {
    const allTeamMembers = await Team.find();
    res.status(201).json({ success: true, data: allTeamMembers, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all PUBLISH Team Members
const GetAllPublishTeamMembers = async (req, res) => {
  try {
    const allPublishTeamMembers = await Team.find({ status: "publish" });
    res
      .status(201)
      .json({ success: true, data: allPublishTeamMembers, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all Draft Team Members
const GetAllDraftTeamMembers = async (req, res) => {
  try {
    const allDraftTeamMembers = await Team.find({ status: "draft" });
    res
      .status(201)
      .json({ success: true, data: allDraftTeamMembers, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Delete a Specific Team Member
const deleteTeamMember = async (req, res) => {
  try {
    const deleteTeamMember = await Team.findByIdAndRemove(req.params.id);
    deleteTeamMember &&
      res.status(201).json({
        success: true,
        data: "Team Member Deleted Succesfully",
        error: null,
      });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Update a Specific Team Member
const updateTeamMember = async (req, res) => {
  try {
    const updateTeamMember = await Team.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          memberName: req.body.memberName,
          status: req.body.status,
          memberDesignation: req.body.memberDesignation,
          socialLink: req.body.socialLink,
          memberImage: req.body.memberImage,
        },
      },
      { new: true }
    );

    res
      .status(400)
      .json({ success: true, data: updateTeamMember, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

module.exports = {
  AddTeamMember,
  GetAllTeamMembers,
  GetAllPublishTeamMembers,
  GetAllDraftTeamMembers,
  deleteTeamMember,
  updateTeamMember,
};
