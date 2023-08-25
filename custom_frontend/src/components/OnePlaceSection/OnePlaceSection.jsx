import React from "react";
import "./OnePlaceSection.css";
import image from "../../assets/images/everything.png";
import Animation1 from "./Animation1";
import Animation2 from "./Animation2";
import Animation3 from "./Animation3";
import PlaceLinks from "./PlaceLinks";
function OnePlaceSection() {
  return (
    <div className="oneplace__section">
      <div className="oneplace__left">
        <img src={image} alt="" className="left__img" />
        <Animation1 />
        <Animation2 />
        <Animation3 />
      </div>
      <div className="oneplace__right">
        <h2>Everything you need in one place</h2>
        <PlaceLinks />
      </div>
    </div>
  );
}

export default OnePlaceSection;
