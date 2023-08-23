const Service = require("../models/services.model");

// Add Service
const AddService = async (req, res) => {
  try {
    const newService = new Service({
      serviceName: req.body.serviceName,
      status: req.body.status,
      serviceDescription: req.body.serviceDescription,
      serviceImage: req.body.serviceImage,
    });
    const savedService = await newService.save();
    res.status(201).json({ success: true, data: savedService, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all services
const GetAllServices = async (req, res) => {
  try {
    const allServices = await Service.find();
    res.status(201).json({ success: true, data: allServices, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all PUBLISH services
const GetAllPublishServices = async (req, res) => {
  try {
    const allPublishServices = await Service.find({ status: "publish" });
    res
      .status(201)
      .json({ success: true, data: allPublishServices, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// get all Draft services
const GetAllDraftServices = async (req, res) => {
  try {
    const allDraftServices = await Service.find({ status: "draft" });
    res
      .status(201)
      .json({ success: true, data: allDraftServices, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Delete a Specific Service
const deleteService = async (req, res) => {
  try {
    const deleteService = await Service.findByIdAndRemove(req.params.id);
    deleteService &&
      res.status(201).json({
        success: true,
        data: "Service Deleted Succesfully",
        error: null,
      });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// Update a Specific Service
const updateService = async (req, res) => {
  try {
    const updateService = await Service.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          serviceName: req.body.serviceName,
          status: req.body.status,
          serviceDescription: req.body.serviceDescription,
          serviceImage: req.body.serviceImage,
        },
      },
      { new: true }
    );

    res.status(400).json({ success: true, data: updateService, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

module.exports = {
  AddService,
  GetAllServices,
  GetAllPublishServices,
  GetAllDraftServices,
  deleteService,
  updateService,
};
