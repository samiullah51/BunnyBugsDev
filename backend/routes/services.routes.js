const {
  AddService,
  GetAllServices,
  GetAllPublishServices,
  GetAllDraftServices,
  deleteService,
  updateService,
} = require("../controllers/services.controller");

const router = require("express").Router();

// Add a Service
router.post("/add", AddService);
router.get("/all", GetAllServices);
router.get("/all/publish", GetAllPublishServices);
router.get("/all/draft", GetAllDraftServices);
router.delete("/delete/:id", deleteService);
router.put("/edit/:id", updateService);

module.exports = router;
