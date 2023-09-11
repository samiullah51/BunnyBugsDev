const {
  AddHomeBanner,
  GetHomeBanner,
  EditHomeBanner,
} = require("../controllers/homeBanner.controller");

const router = require("express").Router();

// add quotation
router.post("/add", AddHomeBanner);
router.get("/", GetHomeBanner);
router.put("/edit/:bannerId", EditHomeBanner);

module.exports = router;
