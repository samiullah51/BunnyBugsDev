const {
  AddJob,
  GetAllJobs,
  GetAllPublishJobs,
  GetAllDraftJobs,
  deleteJob,
  updateJob,
} = require("../controllers/jobs.controller");

const router = require("express").Router();

router.post("/add", AddJob);
router.get("/all", GetAllJobs);
router.get("/all/publish", GetAllPublishJobs);
router.get("/all/draft", GetAllDraftJobs);
router.delete("/delete/:id", deleteJob);
router.put("/edit/:id", updateJob);

module.exports = router;
