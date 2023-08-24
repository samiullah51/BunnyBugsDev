import React, { useState } from "react";
import "./Team.css";
import projects from "../../../assets/projects.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function SingleMember({ member }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="single__service">
      <img src={projects} alt="" />
      <p className="service__title" style={{ textAlign: "center", flex: 1 }}>
        {member.memberName}
        <br />
        <a href={member.socialLink}>{member.socialLink}</a>
      </p>
      <p className="service__title" style={{ textAlign: "center", flex: 1 }}>
        {member.memberDesignation}
      </p>
      <p className="status">{member.status.toUpperCase()}</p>
      <p className="timing edit">Edit</p>
      <p className="timing delete">Delete</p>
    </div>
  );
}

export default SingleMember;
