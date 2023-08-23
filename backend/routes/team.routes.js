const {
  AddTeamMember,
  GetAllTeamMembers,
  GetAllPublishTeamMembers,
  GetAllDraftTeamMembers,
  deleteTeamMember,
  updateTeamMember,
} = require("../controllers/team.controller");

const router = require("express").Router();

router.post("/add", AddTeamMember);
router.get("/all", GetAllTeamMembers);
router.get("/all/publish", GetAllPublishTeamMembers);
router.get("/all/draft", GetAllDraftTeamMembers);
router.delete("/delete/:id", deleteTeamMember);
router.put("/edit/:id", updateTeamMember);

module.exports = router;
