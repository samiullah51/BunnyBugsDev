import React, { useState } from "react";
import "./Services.css";
import SingleService from "./SingleService";
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
        <div className="modal__form">
          <p className="title">Add New Service</p>

          <div className="input__row">
            <label htmlFor="">Service Name</label>
            <input type="text" style={{ width: "40%" }} autoFocus={true} />
          </div>
          {/* Description */}
          <div className="input__row">
            <label htmlFor="">Service Description</label>
            <textarea style={{ width: "40%" }}> </textarea>
          </div>
        </div>
        <div className="modal__close" onClick={() => setModal(false)}>
          X
        </div>
      </div>
    </div>
  );
}

export default Services;
