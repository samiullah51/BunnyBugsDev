const {
  AddContact,
  GetAllContacts,
  deleteContact,
} = require("../controllers/contact.controller");

const router = require("express").Router();

// add contact
router.post("/add", AddContact);
// get all contacts
router.get("/all", GetAllContacts);
router.delete("/delete/:id", deleteContact);

module.exports = router;
