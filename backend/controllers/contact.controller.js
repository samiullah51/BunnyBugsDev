const Contact = require("../models/contact.model");

// Add contact
const AddContact = async (req, res) => {
  try {
    const newContact = new Contact({
      username: req.body.username,
      email: req.body.email,
      contact: req.body.contact,
      message: req.body.message,
    });
    const savedContact = await newContact.save();
    res.status(201).json({ success: true, data: savedContact, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all contacts
const GetAllContacts = async (req, res) => {
  try {
    const allContacts = await Contact.find();
    res.status(201).json({ success: true, data: allContacts, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Delete a Specific Contact
const deleteContact = async (req, res) => {
  try {
    const deleteContact = await Contact.findByIdAndRemove(req.params.id);
    deleteContact &&
      res.status(201).json({
        success: true,
        data: "Contact Deleted Succesfully",
        error: null,
      });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

module.exports = { AddContact, GetAllContacts, deleteContact };
