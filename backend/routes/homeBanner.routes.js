const {
  AddHomeBanner,
  GetHomeBanner,
  EditHomeBanner,
  deleteHomeBanner,
} = require("../controllers/homeBanner.controller");

const router = require("express").Router();

// add quotation
router.post("/add", AddHomeBanner);
router.get("/", GetHomeBanner);
router.put("/edit/:bannerId", EditHomeBanner);
router.delete("/delete/:bannerId", deleteHomeBanner);

module.exports = router;
