import React, { useState } from "react";
import "./Services.css";
import projects from "../../../assets/projects.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function SingleProject({ project }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="single__service">
      <img src={project.projectImage} alt="" />
      <p className="service__title">
        {" "}
        {project.projectName.length > 13
          ? project.projectName.slice(0, 14) + "..."
          : project.projectName}
      </p>
      <p className="desc">
        {project.projectDescription.length > 19
          ? project.projectDescription.slice(0, 20) + "..."
          : project.projectDescription}
      </p>
      <p className="status">{project.status.toUpperCase()}</p>
      <p className="timing edit">Edit</p>
      <p className="timing delete">Delete</p>
    </div>
  );
}

export default SingleProject;
