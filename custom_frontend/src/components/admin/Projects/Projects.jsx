import React, { useEffect, useState } from "react";
import "./Services.css";
import SingleProject from "./SingleProject";
import AddService from "../Services/AddService";
import AddProject from "./AddProjects";
import loader from "../../../assets/loader.gif";
import axios from "axios";

function Projects() {
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      const gotProjects = await axios.get(
        "http://localhost:8000/api/v1/projects/all"
      );
      setProjects(gotProjects.data.data);
      setLoading(false);
    };
    getProjects();
  }, []);
  return loading ? (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={loader} width={400} alt="" />
    </div>
  ) : (
    <div className="services">
      <div className="services__header">
        <p>Projects</p>
        <div className="add__new" onClick={() => setModal(!modal)}>
          Add New
        </div>
      </div>
      {projects.map((project) => (
        <SingleProject project={project} />
      ))}

      <div
        className="servce__modal"
        style={{ transform: modal ? "translateY(0%)" : "translateY(-140%)" }}
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
