import React from "react";
import SingleApp from "./SingleApp";
import appIcon from "../../assets/icon/appicon.png";
function Apps() {
  return (
    <div className="apps">
      <img src={appIcon} className="app__icon" alt="" />
      <SingleApp />
      <SingleApp />
      <SingleApp />
      <SingleApp />
      <SingleApp />
      <SingleApp />
      <SingleApp />
      <SingleApp />
      <SingleApp />
      <SingleApp />
      <SingleApp />
      <SingleApp />
    </div>
  );
}

export default Apps;
