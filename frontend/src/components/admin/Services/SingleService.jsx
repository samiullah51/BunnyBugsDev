import React, { useState } from "react";
import "./Services.css";
import projects from "../../../assets/projects.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function SingleService() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="single__service">
      <img src={projects} alt="" />
      <p className="service__title">Web Development</p>
      <p className="desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
      </p>
      <p className="status">Publish</p>
      <p className="timing edit">Edit</p>
      <p className="timing delete">Delete</p>
    </div>
  );
}

export default SingleService;
