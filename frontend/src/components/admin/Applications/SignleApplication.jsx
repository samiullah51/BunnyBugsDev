import React, { useState } from "react";
import "./Applications.css";
import application from "../../../assets/application2.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import image from "../../../assets/application.png";
function SignleApplication() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="single__application">
      <img src={image} width={40} alt="" />
      <div className="application__info">
        <p className="app__by" style={{ fontSize: "16px", width: "100%" }}>
          Sami Samiullah
        </p>
      </div>
      <p className="app__desc">sami@gmail.com</p>
      <p className="app__desc">03481910747</p>
      <p className="app__desc">Lorem ipsum...</p>
      <p className="timing veiw">Veiw</p>
      <p className="timing delete">Delete</p>
      <p className="timing">2 days ago</p>
    </div>
  );
}

export default SignleApplication;
