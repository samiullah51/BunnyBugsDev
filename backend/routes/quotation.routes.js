const {
  AddQuotation,
  GetQuotations,
} = require("../controllers/quotation.controller");

const router = require("express").Router();

// add quotation
router.post("/add", AddQuotation);
router.get("/", GetQuotations);

module.exports = router;
