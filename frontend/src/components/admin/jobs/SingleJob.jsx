import React, { useState } from "react";
import "./Jobs.css";
import projects from "../../../assets/projects.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function SingleJob({ job }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="single__service">
      <img src={projects} alt="" />
      <p className="service__title">
        {job.jobTitle.length > 15
          ? job.jobTitle.slice(0, 16) + "..."
          : job.jobTitle}
      </p>

      <p className="status">{job.status.toUpperCase()}</p>
      <p className="timing edit">Edit</p>
      <p className="timing delete">Delete</p>
    </div>
  );
}

export default SingleJob;
