import React, { useState } from "react";
import "./Services.css";
import SingleService from "./SingleService";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import UploadImg from "../../../assets/projects.png";
import AddService from "./AddService";
function Services() {
  const [modal, setModal] = useState(false);

  return (
    <div className="services">
      <div className="services__header">
        <p>Services</p>
        <div className="add__new" onClick={() => setModal(!modal)}>
          Add New
        </div>
      </div>
      <SingleService />
      <SingleService />
      <SingleService />
      <SingleService />
      <SingleService />
      {/* Add Modal */}

      <div
        className="servce__modal"
        style={{ transform: modal ? "translateY(0%)" : "translateY(-100%)" }}
      >
        <AddService setModal={setModal} />
        <div className="modal__close" onClick={() => setModal(false)}>
          X
        </div>
      </div>
    </div>
  );
}

export default Services;
