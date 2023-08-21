import React, { useState } from "react";
import "./Applications.css";
import application from "../../../assets/application2.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function SignleApplication() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="single__application">
      <img
        src="https://th.bing.com/th/id/OIP.9EyGQQ_Q2BoanA9LIXyI8AAAAA?pid=ImgDet&rs=1"
        width={40}
        alt=""
      />
      <div className="application__info">
        <p className="app__by">Sami Samiullah</p>
      </div>
      <p className="app__subject">Urgent Leave</p>
      <p className="app__desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing...
      </p>
      <p className="timing veiw">Veiw</p>
      <p className="timing delete">Delete</p>
      <p className="timing">2 days ago</p>
    </div>
  );
}

export default SignleApplication;
