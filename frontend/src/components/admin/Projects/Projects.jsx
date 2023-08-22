import React, { useState } from "react";
import "./Services.css";
import SingleProject from "./SingleProject";
import AddService from "../Services/AddService";
import AddProject from "./AddProjects";
function Projects() {
  const [modal, setModal] = useState(false);

  return (
    <div className="services">
      <div className="services__header">
        <p>Projects</p>
        <div className="add__new" onClick={() => setModal(!modal)}>
          Add New
        </div>
      </div>
      <SingleProject />
      <SingleProject />
      <SingleProject />
      <SingleProject />
      <SingleProject />

      <div
        className="servce__modal"
        style={{ transform: modal ? "translateY(0%)" : "translateY(-100%)" }}
      >
        <AddProject setModal={setModal} />
        <div className="modal__close" onClick={() => setModal(false)}>
          X
        </div>
      </div>
    </div>
  );
}

export default Projects;
