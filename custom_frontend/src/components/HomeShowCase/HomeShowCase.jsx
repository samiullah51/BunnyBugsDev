import React from "react";
import "./HomeShowCase.css";
import image from "../../assets/images/hrrd-hero-img.png";
import image2 from "../../assets/images/hrrd-subscribe-left.png";
import Box1 from "../Box1/Box1";
import Box2 from "../Box2/Box2";
function HomeShowCase() {
  return (
    <div className="home__showcase">
      <img src={image2} alt="" className="shape__img" />
      <Box1 />
      <Box2 />

      <div className="home__showcase__left">
        <h2>Best Platform for Monitor Work Flow</h2>
        <button className="trial__btn">Get 15 Days Trial</button>
      </div>
      <div className="home__showcase__right">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default HomeShowCase;
