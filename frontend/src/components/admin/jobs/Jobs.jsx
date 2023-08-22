import React, { useState } from "react";
import "./Jobs.css";
import SingleJob from "./SingleJob";
import AddJob from "./Addjob";
function Jobs() {
  const [modal, setModal] = useState(false);

  return (
    <div className="services">
      <div className="services__header">
        <p>All Jobs</p>
        <div className="add__new" onClick={() => setModal(!modal)}>
          Add New
        </div>
      </div>
      <SingleJob />
      <SingleJob />
      <SingleJob />
      <SingleJob />

      <div
        className="servce__modal"
        style={{ transform: modal ? "translateY(0%)" : "translateY(-140%)" }}
      >
        <AddJob setModal={setModal} />
        <div className="modal__close" onClick={() => setModal(false)}>
          X
        </div>
      </div>
    </div>
  );
}

export default Jobs;
