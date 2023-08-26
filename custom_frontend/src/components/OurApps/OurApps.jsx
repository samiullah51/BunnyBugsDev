import React from "react";
import "./OurApps.css";
import Apps from "./Apps";
import rotateicon from "../../assets/icon/rotateicon.png";

function OurApps() {
  return (
    <div className="our__apps">
      <img src={rotateicon} alt="" className="rotateicon" />
      <h2>Easy to Intricate Your Apps</h2>
      <Apps />
    </div>
  );
}

export default OurApps;
