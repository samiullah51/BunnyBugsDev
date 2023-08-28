import React from "react";
import latestImg from "../../assets/images/latest.png";
import EastIcon from "@mui/icons-material/East";
function SingleTabContent() {
  return (
    <div className="single__tab__content">
      <div className="wrapper">
        <p className="cat">UI/UX & Dev</p>
        <p className="title">
          Gadding Market eCommerce Website Design and Development
        </p>
        <a href="">
          Read More <EastIcon />{" "}
        </a>
      </div>
      <img src={latestImg} alt="" />
    </div>
  );
}

export default SingleTabContent;
