const {
  AddProject,
  GetAllProjects,
  GetAllPublishProjects,
  GetAllDraftProjects,
  deleteProject,
  updateProject,
} = require("../controllers/projects.controller");

const router = require("express").Router();

// Add a Service
router.post("/add", AddProject);
router.get("/all", GetAllProjects);
router.get("/all/publish", GetAllPublishProjects);
router.get("/all/draft", GetAllDraftProjects);
router.delete("/delete/:id", deleteProject);
router.put("/edit/:id", updateProject);

module.exports = router;
